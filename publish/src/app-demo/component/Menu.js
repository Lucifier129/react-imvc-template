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
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _component.Link,
        { to: '/demo' },
        'home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _component.Link,
        { to: '/demo/list' },
        'list'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _component.Link,
        { to: '/demo/detail' },
        'detail'
      )
    )
  );
}