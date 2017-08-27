'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseController = require('../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _component = require('react-imvc/component');

var _AnimateBothLayout = require('../component/AnimateBothLayout');

var _AnimateBothLayout2 = _interopRequireDefault(_AnimateBothLayout);

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = {
    animateTypeList: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp']
};

var _class = function (_Controller) {
    _inherits(_class, _Controller);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.BaseView = _AnimateBothLayout2.default, _this.View = View, _this.initialState = initialState, _this.handleChangeAnimateType = function (_ref2) {
            var currentTarget = _ref2.currentTarget;

            var animateType = currentTarget.getAttribute('data-animation');
            _this.cookie('animateType', animateType);
            _this.history.push('/advanced_usage/page_transition/d');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;


function View(_ref3) {
    var state = _ref3.state,
        handlers = _ref3.handlers;
    var animateTypeList = state.animateTypeList,
        activeAnimateType = state.activeAnimateType;
    var handleChangeAnimateType = handlers.handleChangeAnimateType;


    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'h2',
            null,
            '\u9875\u9762\u8F6C\u573A\u6548\u679C\u5217\u8868\u9875'
        ),
        _react2.default.createElement(
            'p',
            null,
            '\u70B9\u51FB\u4E0B\u5217\u94FE\u63A5\uFF0C\u4F53\u9A8C\u5E26\u8054\u52A8\u6548\u679C\u7684\u8F6C\u573A\u52A8\u753B'
        ),
        _react2.default.createElement(
            'ul',
            null,
            animateTypeList.map(function (animateType) {
                var style = {
                    'color': animateType === activeAnimateType ? 'red' : 'blue',
                    'textDecoration': 'underline',
                    'marginBottom': 10
                };
                return _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'div',
                        {
                            style: style,
                            'data-animation': animateType,
                            onClick: handleChangeAnimateType
                        },
                        animateType
                    )
                );
            })
        )
    );
}