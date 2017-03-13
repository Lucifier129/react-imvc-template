import path from 'path'
import { Router } from 'express'
import { renderToString } from 'react-dom/server'
import createApp from 'create-app/lib/server'
import config from '../../server.config'
import routes from '../../src'

const router = Router()
export default router

const serverAppSettings = {
  loader: module => module.default || module,
  routes: routes,
  viewEngine: {
    render: renderToString
  }
}

let app = createApp(serverAppSettings)

let assets = null
if (process.env.NODE_ENV === 'development') {
  // 开发模式用 webpack-dev-middleware 获取 assets
  router.use((req, res, next) => {
    assets = getAssets(res.locals.webpackStats.toJson().assetsByChunkName)
    next()
  })
} else {
  // 生产模式直接用编译好的资源表
  assets = getAssets(require('../../dest/stats'))
}

// 纯浏览器端渲染模式，用前置中间件拦截所有请求
if (process.env.CLIENT_RENDER === '1') {
  router.all('*', (req, res) => {
    let clientAppSettings = {
      basename: req.basename || '',
      type: 'createHistory',
      context: {
        basename: req.basename || '',
        preload: {},
        isClient: true,
        isServer: false,
        publicPath: config.publicPath,
        restfulApi: config.restfulApi,
        locationOrigin: config.locationOrigin
      }
    }
    res.render(path.join(__dirname, 'view'), {
      assets: assets,
      appSettings: clientAppSettings
    })
  })
} else if (process.env.NODE_ENV === 'development') {
  // 带服务端渲染模式的开发环境，需要动态编译 src/routes
  var setupDevEnv = require('../build/setup-dev-env')
  setupDevEnv.setupServer({
    handleHotModule: routes => {
      app = createApp({
        ...serverAppSettings,
        routes
      })
    }
  })
}

// handle page
router.all('*', async (req, res, next) => {
  let serverContext = {
    req,
    res,
    isServer: true,
    isClient: false,
    basename: req.basename || '',
    publicPath: config.publicPath,
    // 服务端用 http 协议，浏览器端让浏览器自动补全协议
    restfulApi: 'http:' + config.serverRestfulApi,
    locationOrigin: 'http:' + config.locationOrigin,
    /**
     * serverLocationOrigin 是为了防止因为不能访问外网而导致的错误
     * 它是 localhost:${port} 的形式
     */
    serverLocationOrigin: 'http:' + config.serverLocationOrigin,
    preload: {}
  }

  try {
    let {
      content,
      controller
    } = await app.render(req.url, serverContext)
    /**
       * 如果没有返回 content
       * 不渲染内容，controller 可能通过 context.res 对象做了重定向或者渲染
       */
    if (!content) {
      return
    }

    let clientAppSettings = {
      basename: req.basename,
      type: 'createHistory',
      context: {
        /**
         * 预加载的内容不放到 clientContext 中
         * 在 client entry.js 入口文件里用 dom 操作去拿内容
         * 见 src/share/BaseController
         */
        preload: {},
        basename: req.basename || '',
        publicPath: config.publicPath,
        restfulApi: config.restfulApi,
        locationOrigin: config.locationOrigin
      }
    }

    let initialState = controller.store
      ? controller.store.getState()
      : undefined
    let htmlConfigs = initialState ? initialState.html : undefined
    let data = {
      ...htmlConfigs,
      assets,
      content,
      initialState,
      appSettings: clientAppSettings
    }

    res.render(path.join(__dirname, 'view'), data)
  } catch (error) {
    next(error)
  }
})

function getAssets (stats) {
  return Object.keys(stats).reduce((result, assetName) => {
    let value = stats[assetName]
    result[assetName] = Array.isArray(value) ? value[0] : value
    return result
  }, {})
}
