'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseController = require('../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _Menu = require('../component/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Controller) {
  _inherits(NotFound, _Controller);

  function NotFound() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotFound);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return NotFound;
}(_BaseController2.default);

exports.default = NotFound;


function View(_ref2) {
  var state = _ref2.state,
      handlers = _ref2.handlers;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(
      'div',
      null,
      '404: \u627E\u4E0D\u5230 ',
      state.location.pathname,
      ' \u7684\u63A7\u5236\u5668'
    )
  );
}