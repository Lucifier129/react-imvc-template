'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OuterClickWrapper = function (_Component) {
  _inherits(OuterClickWrapper, _Component);

  function OuterClickWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OuterClickWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OuterClickWrapper.__proto__ || Object.getPrototypeOf(OuterClickWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleOutterClick = function (event) {
      var onClick = _this.props.onClick;

      if (!onClick) {
        return;
      }
      var root = (0, _reactDom.findDOMNode)(_this);
      var isContains = _this.contains(root, event.target || event.srcElement);
      if (!isContains) {
        onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OuterClickWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (document.addEventListener) {
        document.addEventListener('click', this.handleOutterClick);
      } else if (document.attachEvent) {
        document.attachEvent('onclick', this.handleOutterClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (document.removeEventListener) {
        document.removeEventListener('click', this.handleOutterClick);
      } else if (document.detachEvent) {
        document.detachEvent('onclick', this.handleOutterClick);
      }
    }

    // 结点是否包含结点

  }, {
    key: 'contains',
    value: function contains(rootNode, node) {
      if (typeof rootNode.contains === 'function') {
        return rootNode.contains(node);
      }
      while (node) {
        if (node === rootNode) {
          return true;
        }
        node = node.parentNode;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return OuterClickWrapper;
}(_react.Component);

exports.default = OuterClickWrapper;