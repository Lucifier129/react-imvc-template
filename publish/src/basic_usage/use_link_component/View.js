'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = View;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

var _Layout = require('../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View() {
    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'div',
            null,
            'Link \u7EC4\u4EF6\u7528\u6765\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C'
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/' },
                '\u70B9\u51FB\u6211\u53BB\u9996\u9875\uFF0C\u53EF\u4EE5\u56DE\u9000\u5230\u672C\u9875'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/', replace: true },
                '\u70B9\u51FB\u6211\u53BB\u9996\u9875\uFF0C\u4E0D\u53EF\u4EE5\u56DE\u9000\u5230\u672C\u9875'
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/', back: true },
                '\u70B9\u51FB\u6211\u56DE\u9000\u81F3\u4E0A\u4E00\u4E2A\u9875\u9762'
            )
        )
    );
}