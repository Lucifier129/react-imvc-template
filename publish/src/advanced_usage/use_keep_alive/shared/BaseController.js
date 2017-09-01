'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _component = require('react-imvc/component');

var _AnimateBoth = require('../../page_transition/component/AnimateBoth');

var _AnimateBoth2 = _interopRequireDefault(_AnimateBoth);

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controller) {
    _inherits(_class, _Controller);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.preload = {
            'normalize': '/advanced_usage/page_transition/css/normalize.css',
            'animate': '/advanced_usage/page_transition/css/animate.css',
            'main': '/advanced_usage/page_transition/css/main.css'
        }, _this.BaseView = BaseView, _this.KeepAlive = true, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_controller2.default);

exports.default = _class;


function BaseView(_ref2) {
    var children = _ref2.children;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_component.Style, { name: 'normalize' }),
        _react2.default.createElement(_component.Style, { name: 'animate' }),
        _react2.default.createElement(_component.Style, { name: 'main' }),
        _react2.default.createElement(
            _AnimateBoth2.default,
            { animation: 'zoomInDown' },
            _react2.default.createElement(
                _Layout2.default,
                null,
                children
            )
        )
    );
}