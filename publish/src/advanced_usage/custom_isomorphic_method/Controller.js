'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../component/Layout');

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _this.initialState = {
            userAgent: ''
            /**
             * context 里包含 isServer/isClient 字段
             * 标记当前是在 server 端还是 client
             * 可以通过条件判断，采用合适的方法，实现形式上的同构
             */
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'getUserAgent',
        value: function getUserAgent() {
            var context = this.context;

            if (context.isServer) {
                return context.req.headers['user-agent'];
            } else if (context.isClient) {
                return navigator.userAgent;
            }
        }
        /**
         * 
         * getInitialState 既会在服务端执行，也会在浏览器端执行
         * this.getUserAgent 不管在服务端还是浏览器端，都可以拿到一样的结果
         */

    }, {
        key: 'getInitialState',
        value: function getInitialState(initialState) {
            return _extends({}, initialState, {
                userAgent: this.getUserAgent()
            });
        }
    }]);

    return _class;
}(_controller2.default);

exports.default = _class;


function View(_ref2) {
    var state = _ref2.state;

    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'h2',
            null,
            'User-Agent: ',
            state.userAgent
        ),
        _react2.default.createElement(
            'em',
            null,
            'view source to see the user agent of server side'
        )
    );
}