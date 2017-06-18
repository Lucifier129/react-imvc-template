'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _component.Link,
      { to: '/template' },
      '\u9996\u9875'
    ),
    ' ',
    _react2.default.createElement(
      _component.Link,
      { to: '/template/list' },
      '\u5217\u8868'
    ),
    ' ',
    _react2.default.createElement(
      _component.Link,
      { to: '/template/detail' },
      '\u8BE6\u60C5'
    )
  );
}