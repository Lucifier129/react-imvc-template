'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AnimateLayout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

var _AnimateBoth = require('./AnimateBoth');

var _AnimateBoth2 = _interopRequireDefault(_AnimateBoth);

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AnimateLayout(_ref) {
    var state = _ref.state,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_component.Style, { name: 'normalize' }),
        _react2.default.createElement(_component.Style, { name: 'animate' }),
        _react2.default.createElement(
            _AnimateBoth2.default,
            { animation: state.activeAnimateType },
            children
        )
    );
}