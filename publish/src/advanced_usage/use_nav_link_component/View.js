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

function View() {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "div",
      null,
      "\u4F7F\u7528 NavLink \u7EC4\u4EF6\u54CD\u5E94\u5F53\u524D url \u7684\u5339\u914D\u6837\u5F0F"
    ),
    _react2.default.createElement(
      "p",
      null,
      _react2.default.createElement(
        _component.NavLink,
        {
          to: "/advanced_usage/use_nav_link_component/a",
          activeClassName: "active",
          activeStyle: { color: "red" }
        },
        "\u6211\u662F A"
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      _react2.default.createElement(
        _component.NavLink,
        {
          to: "/advanced_usage/use_nav_link_component/b",
          activeClassName: "active",
          activeStyle: { color: "red" }
        },
        "\u6211\u662F B"
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      _react2.default.createElement(
        _component.NavLink,
        {
          to: "/advanced_usage/use_nav_link_component/c",
          activeClassName: "active",
          activeStyle: { color: "red" }
        },
        "\u6211\u662F C"
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      _react2.default.createElement(
        _component.NavLink,
        {
          isActive: isBC,
          activeClassName: "active",
          activeStyle: { color: "red" }
        },
        "\u6211\u662F B \u6216 C \u65F6\u9AD8\u4EAE"
      )
    )
  );
}

function isBC(path, location) {
  return (/b|c/.test(location.raw.substr(-1))
  );
}