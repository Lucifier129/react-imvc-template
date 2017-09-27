'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.KeepAlive = true, _this.View = View, _this.initialState = {
            shouldComponentCreate: 0,
            componentWillCreate: 0,
            componentDidFirstMount: 0,
            componentDidMount: 0,
            componentWillUnmount: 0,
            pageWillLeave: 0,
            pageDidBack: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'updateCount',
        value: function updateCount(type) {
            var state = this.store.getState();
            var UPDATE_STATE = this.store.actions.UPDATE_STATE;

            UPDATE_STATE(_defineProperty({}, type, state[type] + 1));
        }
    }, {
        key: 'shouldComponentCreate',
        value: function shouldComponentCreate() {
            this.updateCount('shouldComponentCreate');
        }
    }, {
        key: 'componentWillCreate',
        value: function componentWillCreate() {
            this.updateCount('componentWillCreate');
        }
    }, {
        key: 'componentDidFirstMount',
        value: function componentDidFirstMount() {
            this.updateCount('componentDidFirstMount');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateCount('componentDidMount');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.updateCount('componentWillUnmount');
        }
    }, {
        key: 'pageWillLeave',
        value: function pageWillLeave() {
            this.updateCount('pageWillLeave');
        }
    }, {
        key: 'pageDidBack',
        value: function pageDidBack() {
            this.updateCount('pageDidBack');
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
            'I am Page B'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _component.Link,
                { to: '/advanced_usage/use_keep_alive/a' },
                '\u53BB Page A'
            ),
            ' ',
            _react2.default.createElement(
                _component.Link,
                { href: 'javascript:;', back: true },
                '\u56DE\u9000'
            ),
            ' ',
            _react2.default.createElement(
                _component.Link,
                { href: 'javascript:;', forward: true },
                '\u524D\u8FDB'
            )
        ),
        _react2.default.createElement(
            'pre',
            null,
            JSON.stringify(state, null, 2)
        )
    );
}