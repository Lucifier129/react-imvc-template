'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _server = require('react-dom/server');

var _server2 = require('create-app/lib/server');

var _server3 = _interopRequireDefault(_server2);

var _server4 = require('../../server.config');

var _server5 = _interopRequireDefault(_server4);

var _src = require('../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = (0, _express.Router)();
exports.default = router;


var serverAppSettings = {
  loader: function loader(module) {
    return module.default || module;
  },
  routes: _src2.default,
  viewEngine: {
    render: _server.renderToString
  }
};

var app = (0, _server3.default)(serverAppSettings);

var assets = null;
if (process.env.NODE_ENV === 'development' || process.env.BUILD === '1') {
  // 开发模式用 webpack-dev-middleware 获取 assets
  router.use(function (req, res, next) {
    assets = getAssets(res.locals.webpackStats.toJson().assetsByChunkName);
    next();
  });
} else {
  // 生产模式直接用编译好的资源表
  assets = getAssets(require('../../stats'));
}

var layoutView = _server5.default.layout || _path2.default.join(__dirname, 'view'

// 添加浏览器端 app 配置
);var attachClientAppSettings = function attachClientAppSettings(req, res, next) {
  var locationOrigin = _server5.default.locationOrigin;
  var host = req.headers.host;
  var basename = req.basename || '';

  if (!host.includes('localhost') && !host.includes('127.0')) {
    locationOrigin = host;
  }

  req.clientAppSettings = {
    basename: basename,
    type: 'createHistory',
    context: {
      basename: basename,
      publicPath: _server5.default.publicPath,
      restfulApi: _server5.default.restfulApi,
      locationOrigin: locationOrigin,
      env: _server5.default.env
    }
  };

  next();
};

router.all('*', attachClientAppSettings

// 纯浏览器端渲染模式，用前置中间件拦截所有请求
);if (process.env.CLIENT_RENDER === '1') {
  router.all('*', function (req, res) {
    res.render(layoutView, {
      assets: assets,
      appSettings: req.clientAppSettings
    });
  });
} else if (process.env.NODE_ENV === 'development') {
  // 带服务端渲染模式的开发环境，需要动态编译 src/routes
  var setupDevEnv = require('../build/setup-dev-env');
  setupDevEnv.setupServer({
    handleHotModule: function handleHotModule(routes) {
      app = (0, _server3.default)(_extends({}, serverAppSettings, {
        routes: routes
      }));
    }
  });
}

// handle page
router.all('*', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
    var serverContext, _ref2, content, controller, initialState, htmlConfigs, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            serverContext = {
              req: req,
              res: res,
              isServer: true,
              isClient: false,
              basename: req.basename || '',
              publicPath: _server5.default.publicPath,
              // 服务端用 http 协议，浏览器端让浏览器自动补全协议
              restfulApi: 'http:' + _server5.default.serverRestfulApi,
              /**
               * serverLocationOrigin 是为了防止因为不能访问外网而导致的错误
               * 它是 localhost:${port} 的形式
               */
              locationOrigin: 'http:' + _server5.default.serverLocationOrigin,
              env: _server5.default.env,
              preload: {}
            };
            _context.prev = 1;
            _context.next = 4;
            return app.render(req.url, serverContext
            /**
               * 如果没有返回 content
               * 不渲染内容，controller 可能通过 context.res 对象做了重定向或者渲染
               */
            );

          case 4:
            _ref2 = _context.sent;
            content = _ref2.content;
            controller = _ref2.controller;

            if (content) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            initialState = controller.store ? controller.store.getState() : undefined;
            htmlConfigs = initialState ? initialState.html : undefined;
            data = _extends({}, htmlConfigs, {
              assets: assets,
              content: content,
              initialState: initialState,
              appSettings: req.clientAppSettings
            });


            res.render(layoutView, data);
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](1);

            next(_context.t0);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 15]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

function getAssets(stats) {
  return Object.keys(stats).reduce(function (result, assetName) {
    var value = stats[assetName];
    result[assetName] = Array.isArray(value) ? value[0] : value;
    return result;
  }, {});
}