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

/**
 * 
 * 组件的 props 里直接有 state 和 actions 对象
 */
function View(_ref) {
  var state = _ref.state,
      actions = _ref.actions;
  var INCREMENT = actions.INCREMENT,
      DECREMENT = actions.DECREMENT,
      CLEAR = actions.CLEAR;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Count: ",
      state.count
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: INCREMENT },
        "+1"
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: DECREMENT },
        "-1"
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: CLEAR },
        "\u5F52\u96F6"
      )
    )
  );
}