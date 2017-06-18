'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/test_server', router);
};

var _express = require('express');

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', isDevelopment, function (req, res) {
  res.render('test/view', {
    title: 'test_server',
    description: 'test simple server side rendering',
    keywords: 'test server render',
    content: '测试普通的服务端路由和渲染逻辑'
  });
});

function isDevelopment(req, res, next) {
  if (process.env.NODE_ENV !== 'development') {
    next(new Error('只在开发模式中可用'));
  } else {
    next();
  }
}