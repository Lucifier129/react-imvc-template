'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _component = require('react-imvc/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// test new component of EventWrapper
var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _this.handleClick = function () {
      console.log('props 传递 click 的点击');
    }, _this.handleClick2 = function () {
      console.log('EventWrapper click 点击默认`div`标签');
    }, _this.handleClick3 = function () {
      console.log('EventWrapper click 按钮');
    }, _this.handleClick4 = function () {
      console.log('EventWrapper click 段落');
    }, _this.handleFocus2 = function () {
      console.log('EventWrapper focus 输入框');
    }, _this.handleMouseOver2 = function () {
      console.log('EventWrapper mouse over 段落');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _class;
}(_controller2.default);

exports.default = _class;


function View(_ref2) {
  var state = _ref2.state,
      handlers = _ref2.handlers;
  var handleClick = handlers.handleClick;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Test Controller'
    ),
    _react2.default.createElement(Parent, { handleClick: handleClick })
  );
}

function Parent(_ref3) {
  var handleClick = _ref3.handleClick;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Child, { handleClick: handleClick })
  );
}

function Child(props) {
  var handleClick = props.handleClick;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Grandson, { handleClick: handleClick })
  );
}

function Grandson(_ref4) {
  var handleClick = _ref4.handleClick;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      { onClick: handleClick },
      'NormalClick'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_component.EventWrapper, {
      as: 'input',
      placeholder: '\u4EE3\u7406`input`',
      onFocus: 'handleFocus2',
      onBlur: function onBlur() {
        console.log('就近 on blur');
      }
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _component.EventWrapper,
      {
        onClick: 'handleClick2',
        style: {
          border: '1px solid red'
        }
      },
      '\u4EE3\u7406\u70B9\u51FB'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _component.EventWrapper,
      {
        as: 'button',
        onClick: 'handleClick3'
      },
      '\u5305\u88C5\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6'
    ),
    _react2.default.createElement(
      _component.EventWrapper,
      {
        as: 'p',
        onClick: 'handleClick4',
        style: {
          border: '1px solid green'
        },
        onMouseOver: 'handleMouseOver2'
      },
      '\u5305\u88C5\u6BB5\u843D\u70B9\u51FB\u4E8B\u4EF6'
    )
  );
}