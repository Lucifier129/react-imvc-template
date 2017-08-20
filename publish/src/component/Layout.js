'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        _component.Link,
        { to: '/' },
        '\u76EE\u5F55'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
}