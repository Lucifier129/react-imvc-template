"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
  var state = _ref.state;

  var hasParams = Object.keys(state.location.params).length !== 0;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "div",
      null,
      "\u9ED8\u8BA4\u586B\u5145\u57FA\u672C\u7684 state \u72B6\u6001"
    ),
    !hasParams && _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _component.Link,
        { to: "/basic_usage/basic_state/123" },
        "\u5E26\u8DEF\u5F84\u53C2\u6570\u7684\u94FE\u63A5"
      )
    ),
    hasParams && _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _component.Link,
        { to: "/basic_usage/basic_state" },
        "\u4E0D\u5E26\u8DEF\u5F84\u53C2\u6570\u7684\u94FE\u63A5"
      )
    ),
    _react2.default.createElement(
      "pre",
      null,
      JSON.stringify(state, null, 2)
    )
  );
}