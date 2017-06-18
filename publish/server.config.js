'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _package = require('./package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || _package2.default.config.port || 3000;

var fat = {
  port: port,
  locationOrigin: '//localhost:' + port,
  restfulApi: '',
  serverLocationOrigin: '//localhost:' + port,
  serverRestfulApi: ''
};

var uat = {
  port: port,
  locationOrigin: '//localhost:' + port,
  restfulApi: '',
  serverLocationOrigin: '//localhost:' + port,
  serverRestfulApi: ''
};

var prod = {
  port: port,
  locationOrigin: '//localhost:' + port,
  restfulApi: '',
  serverLocationOrigin: '//localhost:' + port,
  serverRestfulApi: ''
};

var basename = _package2.default.config.vd;
var env = _package2.default.config.env.toLowerCase();
var envConfigMap = { fat: fat, uat: uat, prod: prod };
var envConfig = envConfigMap[env] || envConfigMap.prod;

var config = _extends({
  env: env,
  title: 'test',
  description: 'test-description',
  keywords: 'test',
  basename: basename,
  publicPath: basename + '/static',
  initialState: undefined,
  content: '',
  appSettings: _extends({}, envConfig)
}, envConfig);

exports.default = config;