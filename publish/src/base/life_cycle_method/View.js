"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
  var state = _ref.state;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    "\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u89C2\u5BDF\u751F\u547D\u5468\u671F\u65B9\u6CD5\u91CC\u7684 log \u65E5\u5FD7"
  );
}