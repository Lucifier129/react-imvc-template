"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require("react-imvc/controller");

var _controller2 = _interopRequireDefault(_controller);

var _View = require("./View");

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImportCSS = function (_Controller) {
  _inherits(ImportCSS, _Controller);

  function ImportCSS() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImportCSS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImportCSS.__proto__ || Object.getPrototypeOf(ImportCSS)).call.apply(_ref, [this].concat(args))), _this), _this.preload = _defineProperty({
      base: "/basic_usage/import_css/css/base.css"
    }, _this.location.query.color || 'red', getCssByColor(_this.location.query.color)), _this.View = _View2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
  * 用 preload 属性指定需要预加载的 css 文件
  * 可以动态地构造出来
  */


  return ImportCSS;
}(_controller2.default);

exports.default = ImportCSS;


var whileList = ["red", "blue"];
function getCssByColor(color) {
  if (whileList.includes(color)) {
    return "/basic_usage/import_css/css/" + color + ".css";
  }
  return "/basic_usage/import_css/css/red.css";
}