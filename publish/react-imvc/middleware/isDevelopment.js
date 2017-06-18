'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDevelopment;
function isDevelopment(req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    next();
  } else {
    next({
      message: '此 api 只在开发模式中可用！'
    });
  }
}