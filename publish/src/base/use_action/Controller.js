'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Model = require('./Model');

var Model = _interopRequireWildcard(_Model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UseAction = function (_Controller) {
    _inherits(UseAction, _Controller);

    function UseAction() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UseAction);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UseAction.__proto__ || Object.getPrototypeOf(UseAction)).call.apply(_ref, [this].concat(args))), _this), _this.View = _View2.default, _this.Model = Model, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return UseAction;
}(_controller2.default);

exports.default = UseAction;