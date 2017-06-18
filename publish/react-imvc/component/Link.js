'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          replace = _this$props.replace,
          to = _this$props.to;
      var _this$context = _this.context,
          history = _this$context.history,
          location = _this$context.location;

      onClick && onClick(event);
      if (!to) {
        return;
      }
      event.preventDefault();
      if (replace === true) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _context$location$bas = this.context.location.basename,
          basename = _context$location$bas === undefined ? '' : _context$location$bas;

      var _props = this.props,
          to = _props.to,
          children = _props.children,
          replace = _props.replace,
          as = _props.as,
          others = _objectWithoutProperties(_props, ['to', 'children', 'replace', 'as']);

      var Tag = as;

      if (Tag === 'a') {
        var targetPath = to ? '' + basename + to : null;
        return _react2.default.createElement(
          'a',
          _extends({}, others, { href: targetPath, onClick: this.handleClick }),
          children
        );
      }

      return _react2.default.createElement(
        Tag,
        _extends({}, others, { onClick: this.handleClick }),
        children
      );
    }
  }]);

  return Link;
}(_react.Component);

Link.contextTypes = {
  location: _react.PropTypes.object,
  history: _react.PropTypes.object
};
Link.defaultProps = {
  as: 'a'
};
exports.default = Link;