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

/**
 * 
 * 组件的 props 里直接有 state 和 actions 对象
 * Input 组件的 name 属性支持 path
 * 可以是: a.b.c.e 的写法
 * 也可以是 a/b/c/e 的写法
 * 其 transformer 属性可以用来转换数据类型
 */
function View(_ref) {
  var state = _ref.state,
      actions = _ref.actions;
  var INCREMENT = actions.INCREMENT,
      DECREMENT = actions.DECREMENT;

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
      _react2.default.createElement(_component.Input, { name: "num", transformer: Number })
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: INCREMENT },
        "+",
        state.num
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: DECREMENT },
        "-",
        state.num
      )
    )
  );
}