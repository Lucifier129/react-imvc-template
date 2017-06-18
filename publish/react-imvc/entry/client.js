'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _client = require('create-app/lib/client');

var _client2 = _interopRequireDefault(_client);

var _src = require('../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_public_path__ = window.__PUBLIC_PATH__ + '/';
var __APP_SETTINGS__ = window.__APP_SETTINGS__ || {};

var getModule = function getModule(module) {
  return module.default || module;
};
var webpackLoader = function webpackLoader(loadModule) {
  if (typeof loadModule === 'function') {
    return new Promise(loadModule).then(getModule);
  }
  return getModule(loadModule);
};

var logRenderStart = function logRenderStart() {
  console && console.time && console.time('React#render');
};

var logRenderEnd = function logRenderEnd() {
  console && console.timeEnd && console.timeEnd('React#render');
};

var viewEngine = {
  render: function render(component, container) {
    logRenderStart();
    var result = _reactDom2.default.render(component, container);
    setTimeout(logRenderEnd, 0 // ReactDOM.render 未必立即更新，故异步 log End
    );return result;
  }
};

var appSettings = _extends({}, __APP_SETTINGS__, {
  hashType: 'hashbang',
  container: '#root',
  context: _extends({
    preload: {}
  }, __APP_SETTINGS__.context, {
    isClient: true,
    isServer: false
  }),
  loader: webpackLoader,
  routes: _src2.default,
  viewEngine: viewEngine

  /**
   * 动态收集服务端预加载的内容
   */
});var preload = {};
Array.from(document.querySelectorAll('[data-preload]')).forEach(function (elem) {
  var name = elem.getAttribute('data-preload');
  var content = elem.textContent || elem.innerHTML;
  preload[name] = content;
});
appSettings.context.preload = preload;

var app = (0, _client2.default)(appSettings);

app.start();