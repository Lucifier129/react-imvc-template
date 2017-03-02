import path from "path";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import createApp from "create-app/lib/server";
import config from "../config";
import routes from "../../src/routes";
import stats from "../../static/stats";

const router = Router();
export default router;

const plainStats = Object.keys(stats).reduce(
  (result, assetName) => {
    let value = stats[assetName];
    result[assetName] = Array.isArray(value) ? value[0] : value;
    return result;
  },
  {}
);
const debugStats = Object.keys(plainStats).reduce(
  (result, assetName) => {
    result[assetName] = `${assetName}.js`;
    return result;
  },
  {}
);

const basename = config.basename;
const shareContext = {
  basename,
  isClient: false,
  isServer: true,
  user: null,
  publicPath: config.publicPath
};
const serverAppSettings = {
  basename,
  loader: module => module.default || module,
  routes: routes,
  viewEngine: {
    render: renderToString
  },
  context: shareContext
};

let app = createApp(serverAppSettings);

let isClientRender = process.env.CLIENT_RENDER === "1";

// 开发模式动态编译 src/routes
if (process.env.NODE_ENV === "development" && !isClientRender) {
  var setupDevEnv = require("../../build/setup-dev-env");
  setupDevEnv.setupServer({
    handleHotModule: routes => {
      app = createApp({ ...serverAppSettings, routes });
    }
  });
}

// handle page
router.all("*", async (req, res, next) => {
  let url = req.url;
  let serverContext = {
    ...shareContext,
    cookie: req.headers.cookie || "",
    // 服务端用 http 写一，浏览器端让浏览器自动补全协议
    restfulApi: "http:" + config.serverRestfulApi,
    locationOrigin: "http:" + config.locationOrigin,
    preload: {},
    req,
    res
  };
  let clientContext = {
    /**
         * 预加载的内容不放到 clientContext 中
         * 在 client entry.js 入口文件里用 dom 操作去拿内容
         * 见 src/share/BaseController
         */
    preload: {},
    ...shareContext,
    restfulApi: config.restfulApi,
    locationOrigin: config.locationOrigin
  };
  let clientAppSettings = {
    basename,
    type: "createHistory",
    context: clientContext
  };

  let assets = req.query.debug === "1" ? debugStats : plainStats;

  // 开发模式用 webpack-dev-middleware 获取 assets
  if (process.env.NODE_ENV === "development") {
    let assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    assets = Object.keys(assetsByChunkName).reduce(
      (result, assetName) => {
        let value = assetsByChunkName[assetName];
        result[assetName] = Array.isArray(value) ? value[0] : value;
        return result;
      },
      {}
    );
  }

  if (isClientRender) {
    res.render("layout", {
      assets,
      appSettings: clientAppSettings
    });
    return;
  }

  try {
    let { content, controller } = await app.render(url, serverContext);
    /**
         * 如果没有返回 content
         * 不渲染内容，controller 可能通过 context.res 对象做了重定向或者渲染
         */
    if (!content) {
      return;
    }
    let initialState = controller.store
      ? controller.store.getState()
      : undefined;
    let htmlConfigs = initialState ? initialState.html : undefined;
    let layout = controller.layout || "layout";

    res.render(layout, {
      ...htmlConfigs,
      assets,
      content,
      initialState,
      appSettings: clientAppSettings
    });
  } catch (error) {
    next(error);
  }
});
