'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseController = require('../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

var _AnimateBothLayout = require('../component/AnimateBothLayout');

var _AnimateBothLayout2 = _interopRequireDefault(_AnimateBothLayout);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.BaseView = _AnimateBothLayout2.default, _this.View = View, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;


function View(_ref2) {
    var state = _ref2.state;

    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'h2',
            null,
            '\u9875\u9762\u8F6C\u573A\u7A7A\u767D\u9875: ',
            state.location.query.randomKey || 'first'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _component.Link,
                { href: 'javascript:;', back: true },
                '\u70B9\u51FB\u6211\u56DE\u9000\u81F3\u4E0A\u4E00\u9875'
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/advanced_usage/page_transition/d?randomKey=' + Math.random().toString(36).substr(2, 8) },
                '\u70B9\u6211\u65B0\u5F00\u9875\u9762'
            )
        ),
        _react2.default.createElement('div', { style: { height: 1000 } }),
        _react2.default.createElement(
            _component.Link,
            { href: 'javascript:;', back: true },
            '\u70B9\u51FB\u6211\u56DE\u9000\u81F3\u4E0A\u4E00\u9875'
        )
    );
}