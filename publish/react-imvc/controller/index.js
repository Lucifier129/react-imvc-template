'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // base controller class


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _relite = require('relite');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _createViewWrapper = require('./createViewWrapper');

var _createViewWrapper2 = _interopRequireDefault(_createViewWrapper);

var _recorder = require('./recorder');

var _recorder2 = _interopRequireDefault(_recorder);

var _BaseView = require('../component/BaseView');

var _BaseView2 = _interopRequireDefault(_BaseView);

var _actions = require('./actions');

var shareActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 绑定 Store 到 View
 * 提供 Controller 的生命周期钩子
 * 组装事件处理器 Event Handlers
 * 提供 fetch 方法
 */
var Controller = function () {
  function Controller(location, context) {
    _classCallCheck(this, Controller);

    this.View = View;

    this.location = location;
    this.context = context;
    this.handlers = {};
  }
  // 绑定 handler 的 this 值为 controller 实例


  _createClass(Controller, [{
    key: 'combineHandlers',
    value: function combineHandlers(source) {
      var _this = this;

      var handlers = this.handlers;

      Object.keys(source).forEach(function (key) {
        var value = source[key];
        if (key.indexOf('handle') === 0 && typeof value === 'function') {
          handlers[key] = value.bind(_this);
        }
      });
    }
  }, {
    key: 'prependBasename',
    value: function prependBasename(pathname) {
      if (_util2.default.isAbsoluteUrl(pathname)) {
        return pathname;
      }
      var basename = this.context.basename;

      return basename + pathname;
    }
  }, {
    key: 'prependPublicPath',
    value: function prependPublicPath(pathname) {
      if (_util2.default.isAbsoluteUrl(pathname)) {
        return pathname;
      }
      var publicPath = this.context.publicPath;

      return publicPath + pathname;
    }

    // 处理 url 的相对路径或 mock 地址问题

  }, {
    key: 'prependRestfulBasename',
    value: function prependRestfulBasename(url) {
      var context = this.context;

      /**
      * 如果已经是绝对路径
      * 在服务端直接返回 url
      * 在客户端裁剪掉 http: 使之以 // 开头
      * 让浏览器自动匹配协议，支持 Https
      */

      if (_util2.default.isAbsoluteUrl(url)) {
        if (context.isClient && url.indexOf('http:') === 0) {
          url = url.replace('http:', '');
        }
        return url;
      }

      // 对 mock 的请求进行另一种拼接，转到 node.js 服务去
      if (url.indexOf('/mock/') === 0) {
        return this.prependBasename(url);
      }

      return context.restfulApi + url;
    }

    /**
    * 封装重定向方法，根据 server/client 环境不同而选择不同的方式
    * isRaw 是否不拼接 Url，直接使用
    */

  }, {
    key: 'redirect',
    value: function redirect(redirectUrl, isRaw) {
      var history = this.history,
          context = this.context;


      if (context.isServer) {
        if (!isRaw && !_util2.default.isAbsoluteUrl(redirectUrl)) {
          // 兼容 history.push，自动补全 basename
          redirectUrl = this.prependBasename(redirectUrl);
        }
        context.res.redirect(redirectUrl);
      } else if (context.isClient) {
        if (isRaw || _util2.default.isAbsoluteUrl(redirectUrl)) {
          window.location.replace(redirectUrl);
        } else {
          history.replace(redirectUrl);
        }
      }
    }
    // 封装 cookie 的同构方法

  }, {
    key: 'cookie',
    value: function cookie(key, value, options) {
      if (value == null) {
        return this.getCookie(key);
      }
      this.setCookie(key, value, options);
    }
  }, {
    key: 'getCookie',
    value: function getCookie(key) {
      var context = this.context;

      if (context.isServer) {
        var req = context.req;

        return req.cookies[key];
      } else if (context.isClient) {
        return _jsCookie2.default.get(key);
      }
    }
  }, {
    key: 'setCookie',
    value: function setCookie(key, value, options) {
      var context = this.context;


      if (options && options.expires) {
        var isDateInstance = options.expires instanceof Date;
        if (!isDateInstance) {
          throw new Error('cookie \u7684\u8FC7\u671F\u65F6\u95F4 expires \u5FC5\u987B\u4E3A Date \u7684\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F ' + options.expires);
        }
      }

      if (context.isServer) {
        var res = context.res;

        res.cookie(key, value, options);
      } else if (context.isClient) {
        _jsCookie2.default.set(key, value, options);
      }
    }
  }, {
    key: 'removeCookie',
    value: function removeCookie(key, options) {
      var context = this.context;


      if (context.isServer) {
        var res = context.res;

        res.clearCookie(key, options);
      } else if (context.isClient) {
        _jsCookie2.default.remove(key, options);
      }
    }

    /**
    * 封装 fetch, https://github.github.io/fetch
    * options.json === false 不自动转换为 json
    * options.timeout:number 超时时间
     * options.raw 不补全 restfulBasename 
    */

  }, {
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var context = this.context;

      // 补全 url

      if (!options.raw) {
        url = this.prependRestfulBasename(url);
      }

      var finalOptions = _extends({
        method: 'GET',
        credentials: 'include'
      }, options, {
        headers: _extends({
          'Content-Type': 'application/json'
        }, options.headers)
        /**
        * 浏览器端的 fetch 有 credentials: 'include'，会自动带上 cookie
        * 服务端得手动设置，可以从 context 对象里取 cookie
        */
      });if (context.isServer) {
        finalOptions.headers['Cookie'] = context.req.headers.cookie || '';
      }

      var fetchData = fetch(url, finalOptions

      /**
      * 拓展字段，如果手动设置 options.json 为 false
      * 不自动 JSON.parse
      */
      );if (options.json !== false) {
        fetchData = fetchData.then(function (response) {
          // 如果 response 状态异常，抛出错误
          if (!response.ok || response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return response.json();
        });
      }

      var promiseList = [fetchData];

      /**
      * 设置自动化的超时处理
      */
      if (typeof options.timeout === 'number') {
        var timeoutReject = new Promise(function (resolve, reject) {
          setTimeout(function () {
            return reject(new Error('Timeout Error:' + options.timeout + 'ms'));
          }, options.timeout);
        });
        promiseList.push(timeoutReject);
      }

      return Promise.race(promiseList);
    })
    /**
    * 预加载 css 样式等资源
    */

  }, {
    key: 'fetchPreload',
    value: function fetchPreload(preload) {
      var _this2 = this;

      preload = preload || this.preload;
      var keys = Object.keys(preload);
      if (!preload || keys.length === 0) {
        return;
      }

      var context = this.context;

      var list = keys.map(function (name) {
        if (context.preload[name]) {
          return;
        }
        var url = preload[name];
        url = _this2.prependPublicPath(url);

        return fetch(url).then(_util2.default.toText).then(function (content) {
          if (url.split('?')[0].indexOf('.css') !== -1) {
            /**
            * 如果是 CSS ，清空回车符
            * 否则同构渲染时 react 计算 checksum 值会不一致
            */
            content = content.replace(/\r+/g, '');
          }
          context.preload[name] = content;
        });
      });
      return Promise.all(list);
    }
  }, {
    key: 'subscriber',
    value: function subscriber(data) {
      var context = this.context,
          logger = this.logger;

      if (context.isServer) {
        return;
      }
      logger(data);
      this.refreshView();
      if (this.stateDidChange) {
        this.stateDidChange(data);
      }
    }
  }, {
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var initialState, getInitialState, actions, context, location, globalInitialState, finalInitialState, finalActions, store, promiseList, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                initialState = this.initialState, getInitialState = this.getInitialState, actions = this.actions, context = this.context, location = this.location;

                // 在 init 方法里 bind this，这样 fetch 可以支持继承
                // 如果用 fetch = (url, option = {}) => {} 的写法，它不是原型方法，无法继承

                this.fetch = this.fetch.bind(this);

                globalInitialState = void 0;

                // 服务端把 initialState 吐在 html 里的全局变量 __INITIAL_STATE__ 里

                if (typeof __INITIAL_STATE__ !== 'undefined') {
                  globalInitialState = __INITIAL_STATE__;
                  __INITIAL_STATE__ = undefined;
                }

                if (typeof initialState === 'function') {
                  initialState = initialState(location, context);
                }

                finalInitialState = _extends({}, initialState, globalInitialState, {
                  location: location,
                  isClient: context.isClient,
                  isServer: context.isServer,
                  publicPath: context.publicPath,
                  restfulApi: context.restfulApi

                  /**
                  * 获取动态初始化的 initialState
                  */
                });

                if (!this.getInitialState) {
                  _context.next = 10;
                  break;
                }

                _context.next = 9;
                return this.getInitialState(finalInitialState);

              case 9:
                finalInitialState = _context.sent;

              case 10:

                /**
                * 创建 store
                */
                finalActions = _extends({}, shareActions, actions);
                store = this.store = (0, _relite.createStore)(finalActions, finalInitialState

                /**
                * 将 handle 开头的方法，合并到 this.handlers 中
                */
                );
                this.combineHandlers(this

                /**
                * 如果存在 globalInitialState
                * 说明服务端渲染了 html 和 intitialState
                * component 已经创建
                * 不需要再调用 shouldComponentCreate 和 componentWillCreate
                */
                );
                if (!globalInitialState) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt('return', this.bindStoreToView());

              case 15:
                promiseList = [];

                /**
                * 如果 shouldComponentCreate 返回 false，不创建和渲染 React Component
                * 可以在 shouldComponentCreate 里重定向到别的 Url
                */

                if (!this.shouldComponentCreate) {
                  _context.next = 22;
                  break;
                }

                _context.next = 19;
                return this.shouldComponentCreate();

              case 19:
                result = _context.sent;

                if (!(result === false)) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt('return', null);

              case 22:

                // 在 React Component 创建前调用，可以发 ajax 请求获取数据
                if (this.componentWillCreate) {
                  promiseList.push(this.componentWillCreate());
                }

                /**
                * 获取预加载的资源
                */
                if (this.preload) {
                  promiseList.push(this.fetchPreload());
                }

                if (!promiseList.length) {
                  _context.next = 27;
                  break;
                }

                _context.next = 27;
                return Promise.all(promiseList);

              case 27:
                return _context.abrupt('return', this.bindStoreToView());

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'bindStoreToView',
    value: function bindStoreToView() {
      var context = this.context,
          store = this.store,
          location = this.location,
          View = this.View,
          history = this.history;

      // bind store to view in client

      if (context.isClient) {
        this.logger = (0, _relite.createLogger)({
          name: this.name || location.pattern
        });
        var unsubscribeList = [];
        var unsubscribe = store.subscribe(this.subscriber.bind(this));
        unsubscribeList.push(unsubscribe

        // 监听路由跳转
        );if (this.pageWillLeave) {
          var unlisten = history.listenBefore(this.pageWillLeave.bind(this));
          unsubscribeList.push(unlisten);
        }

        // 监听浏览器窗口关闭
        if (this.windowWillUnload) {
          var _unlisten = history.listenBeforeUnload(this.windowWillUnload.bind(this));
          unsubscribeList.push(_unlisten);
        }

        this.unsubscribeList = unsubscribeList;

        (0, _recorder2.default)(store);
        window.scrollTo(0, 0);
      }

      this.ViewWrapper = (0, _createViewWrapper2.default)(this);

      return this.render();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.unsubscribeList) {
        this.unsubscribeList.forEach(function (unsubscribe) {
          return unsubscribe();
        });
        this.unsubscribeList = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ViewWrapper = this.ViewWrapper,
          store = this.store,
          handlers = this.handlers,
          location = this.location,
          history = this.history,
          context = this.context,
          handleInputChange = this.handleInputChange;

      var state = store.getState();
      var componentContext = {
        location: location,
        history: history,
        state: state,
        actions: store.actions,
        preload: context.preload,
        handleInputChange: handleInputChange,
        handlers: handlers
      };
      return _react2.default.createElement(
        _BaseView2.default,
        { context: componentContext },
        _react2.default.createElement(ViewWrapper, { state: state, handlers: handlers })
      );
    }
  }]);

  return Controller;
}();

exports.default = Controller;


function View() {
  return false;
}