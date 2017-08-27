'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = View;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
            '\u6211\u662F\u4E00\u4E2A\u9759\u6001\u7684 View\uFF0C\u6CA1\u6709\u5176\u4ED6\u4F5C\u7528'
        )
    );
}