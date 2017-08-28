'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createViewManager;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyStyle = {
    position: '',
    top: '',
    left: '',
    backgroundColor: '',
    width: '',
    minHeight: '',
    boxShadow: '',
    webkitBoxShadow: ''
};

function createViewManager() {
    var _class, _temp2;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var getStyle = function getStyle(style) {
        return Object.assign({
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#fff',
            width: '100%',
            minHeight: window.innerHeight + 'px',
            boxShadow: '-2px 2px 5px #eaeaea',
            webkitBoxShadow: '-2px 2px 5px #eaeaea'
        }, style, options.style);
    };
    return _temp2 = _class = function (_React$Component) {
        _inherits(ViewManager, _React$Component);

        function ViewManager() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, ViewManager);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ViewManager.__proto__ || Object.getPrototypeOf(ViewManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                prevView: null
            }, _this.scrollStore = {}, _this.saveScroll = function () {
                var location = _this.context.location;

                _this.scrollStore[location.raw] = window.scrollY;
            }, _this.getContainer = function (container) {
                _this.container = container;
            }, _this.getCurrent = function (current) {
                _this.current = current;
            }, _this.getPrevious = function (previous) {
                _this.previous = previous;
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(ViewManager, [{
            key: 'getType',
            value: function getType() {
                if (!this.state.prevView) {
                    return 'normal';
                } else if (this.context.location.action !== 'POP') {
                    return 'in';
                } else {
                    return 'out';
                }
            }
        }, {
            key: 'emit',
            value: function emit(method) {
                var _this2 = this;

                if (typeof options[method] !== 'function') {
                    return;
                }
                var current = this.current,
                    previous = this.previous,
                    container = this.container,
                    props = this.props;

                var data = { props: props, current: current, previous: previous, container: container };
                var reset = function reset() {
                    Object.assign(current.style, emptyStyle);
                    Object.assign(previous.style, emptyStyle);
                    _this2.setState({
                        prevView: null
                    });
                };
                var promise = options[method](data, reset);
                if (promise && typeof promise.then === 'function') {
                    promise.then(reset).catch(function (error) {
                        return alert(error);
                    });
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                window.addEventListener('scroll', this.saveScroll);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                window.removeEventListener('scroll', this.saveScroll);
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(_, nextContext) {
                var currentLocation = this.context.location;
                var nextLocation = nextContext.location;
                if (currentLocation !== nextLocation) {
                    this.setState({
                        prevView: this.props.children,
                        prevLocation: currentLocation
                    });
                }
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                var current = this.current,
                    previous = this.previous,
                    container = this.container;

                this.saveScroll();
                switch (this.getType()) {
                    case 'in':
                        Object.assign(current.style, getStyle());
                        this.emit('onPageIn');
                        break;
                    case 'out':
                        var top = -this.scrollStore[this.state.prevLocation.raw];
                        Object.assign(previous.style, getStyle({
                            top: top + 'px'
                        }));
                        this.emit('onPageOut');
                        break;
                }
            }
        }, {
            key: 'renderNormal',
            value: function renderNormal() {
                var _props = this.props,
                    Tag = _props.as,
                    props = _objectWithoutProperties(_props, ['as']);

                return _react2.default.createElement(
                    Tag,
                    props,
                    _react2.default.createElement(
                        'div',
                        { key: 'current' },
                        this.props.children
                    )
                );
            }
        }, {
            key: 'renderIn',
            value: function renderIn() {
                var _props2 = this.props,
                    Tag = _props2.as,
                    props = _objectWithoutProperties(_props2, ['as']);

                var currView = this.props.children;
                var prevView = this.state.prevView;
                return _react2.default.createElement(
                    Tag,
                    _extends({}, props, { ref: this.getContainer }),
                    _react2.default.createElement(
                        'div',
                        { key: 'current', ref: this.getCurrent },
                        currView
                    ),
                    _react2.default.createElement(
                        'div',
                        { key: 'previous', ref: this.getPrevious },
                        prevView
                    )
                );
            }
        }, {
            key: 'renderOut',
            value: function renderOut() {
                var _props3 = this.props,
                    Tag = _props3.as,
                    props = _objectWithoutProperties(_props3, ['as']);

                var currView = this.props.children;
                var prevView = this.state.prevView;
                return _react2.default.createElement(
                    Tag,
                    _extends({}, props, { ref: this.getContainer }),
                    _react2.default.createElement(
                        'div',
                        { key: 'previous', ref: this.getPrevious },
                        prevView
                    ),
                    _react2.default.createElement(
                        'div',
                        { key: 'current', ref: this.getCurrent },
                        currView
                    )
                );
            }
        }, {
            key: 'render',
            value: function render() {
                switch (this.getType()) {
                    case 'in':
                        return this.renderIn();
                    case 'out':
                        return this.renderOut();
                    default:
                        return this.renderNormal();
                }
            }
        }]);

        return ViewManager;
    }(_react2.default.Component), _class.contextTypes = {
        location: _react2.default.PropTypes.object
    }, _class.defaultProps = {
        as: 'div'
    }, _temp2;
}