'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * BaesView 组件
 * 映射 React Component 的生命周期方法
 * 传递 React Component 的 context 对象
 */
var BaseView = function (_PureComponent) {
  _inherits(BaseView, _PureComponent);

  function BaseView() {
    _classCallCheck(this, BaseView);

    return _possibleConstructorReturn(this, (BaseView.__proto__ || Object.getPrototypeOf(BaseView)).apply(this, arguments));
  }

  _createClass(BaseView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return BaseView;
}(_react.PureComponent);

BaseView.childContextTypes = {
  location: _react.PropTypes.object,
  history: _react.PropTypes.object,
  actions: _react.PropTypes.object,
  state: _react.PropTypes.object,
  preload: _react.PropTypes.object,
  handlers: _react.PropTypes.object,
  handleInputChange: _react.PropTypes.func
};
exports.default = BaseView;