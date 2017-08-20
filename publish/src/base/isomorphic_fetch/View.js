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

function View(_ref) {
    var state = _ref.state;

    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'h2',
            null,
            '\u9996\u5C4F\u6570\u636E'
        ),
        _react2.default.createElement(
            'pre',
            null,
            JSON.stringify(state.ssr)
        ),
        _react2.default.createElement(
            'h2',
            null,
            '\u975E\u9996\u5C4F\u6570\u636E'
        ),
        _react2.default.createElement(
            'pre',
            null,
            JSON.stringify(state.csr)
        )
    );
}