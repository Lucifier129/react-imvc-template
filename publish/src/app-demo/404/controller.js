'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _component = require('react-img/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Contrller) {
  _inherits(NotFound, _Contrller);

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
}(_controller2.default);

exports.default = NotFound;


function View() {
  return _react2.default.createElement(
    'h1',
    null,
    '\u8352\u91CE\u5730\u5E26'
  );
}