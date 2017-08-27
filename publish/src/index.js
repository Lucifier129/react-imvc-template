'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic_usage = require('./basic_usage');

var _basic_usage2 = _interopRequireDefault(_basic_usage);

var _advanced_usage = require('./advanced_usage');

var _advanced_usage2 = _interopRequireDefault(_advanced_usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
exports.default = [{
  path: ['/', '/index', '/list'],
  controller: require('./home/Controller')
}, _basic_usage2.default, _advanced_usage2.default];