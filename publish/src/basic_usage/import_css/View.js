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

function View(_ref) {
    var state = _ref.state;

    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(_component.Style, { name: 'base' }),
        _react2.default.createElement(_component.Style, { name: state.location.query.color || 'red' }),
        _react2.default.createElement(
            'div',
            { className: 'text' },
            '\u6211\u662F\u4E00\u4E2A\u9759\u6001\u7684 View\uFF0C\u6CA1\u6709\u5176\u4ED6\u4F5C\u7528\uFF0C\u4F46\u6709\u6837\u5F0F'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/basic_usage/import_css?color=red' },
                'red'
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/basic_usage/import_css?color=blue' },
                'blue'
            )
        )
    );
}