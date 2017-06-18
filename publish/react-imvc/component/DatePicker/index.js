'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 文档
 * Customizable date (and time) picker. Opt-in UI, no jQuery! https://bevacqua.github.io/rome
 * this.props.calendar 就是 rome 的 options 选项
 */
var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.handleRomeData = function (value) {
      var event = {
        currentTarget: {
          value: value
        }
      };
      _this.handleChange(event);
    }, _this.handleChange = function (event) {
      var onChange = _this.props.onChange;

      onChange && onChange(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // rome 不支持 node.js 服务端引入，在 didMount 时以 require 的方式引入
      var rome = require('rome');
      var input = this.refs.input;
      var calendar = this.props.calendar;

      var options = _extends({
        time: false
      }, calendar);
      this.rome = rome(input, options);
      this.rome.on('data', this.handleRomeData
      // 添加样式
      );createStyle();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.rome) {
        this.rome.destroy();
      }
      // 删除样式
      destroyStyle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          calendar = _props.calendar,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['calendar', 'children']);

      return _react2.default.createElement('input', _extends({ ref: 'input' }, props, { onChange: this.handleChange }));
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

/**
 * 只在必要时添加样式和删除样式
 */


exports.default = DatePicker;
var depsCount = 0;
var styleElem = null;
function createStyle() {
  depsCount += 1;
  if (styleElem) {
    return;
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = _style2.default;
  document.head.appendChild(style);
  styleElem = style;
}

function destroyStyle() {
  depsCount -= 1;
  if (depsCount === 0) {
    styleElem.parentNode.removeChild(styleElem);
    styleElem = null;
  }
}