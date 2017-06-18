'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appTemplate = require('./app-template');

var _appTemplate2 = _interopRequireDefault(_appTemplate);

var _appDemo = require('./app-demo');

var _appDemo2 = _interopRequireDefault(_appDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 项目路由表
 * 往数组里添加项目即可
 */
var routes = [_appTemplate2.default, _appDemo2.default];

exports.default = routes.reduce(function (routes, item) {
  return item ? routes.concat(item) : routes;
}, []);