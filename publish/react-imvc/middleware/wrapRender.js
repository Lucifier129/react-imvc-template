"use strict";

/**
 * wrap 渲染函数，提供一些默认数据和通用数据
 */

module.exports = function wrapRender(_ref) {
  var defaults = _ref.defaults;

  return function (req, res, next) {
    var _render = res.render;

    res.render = function (viewName, options, callback) {
      var finalOptions = Object.assign({}, defaults, options);
      return _render.call(this, viewName, finalOptions, callback);
    };

    next();
  };
};