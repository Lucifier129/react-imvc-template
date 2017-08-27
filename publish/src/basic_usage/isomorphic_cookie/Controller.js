'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

/**
 * 用 cookie 来持久化存储 count 信息，在 getInitialState 时获取，在页面离开或关闭前保存
 */
var IsomorphicCookie = function (_Controller) {
    _inherits(IsomorphicCookie, _Controller);

    function IsomorphicCookie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, IsomorphicCookie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IsomorphicCookie.__proto__ || Object.getPrototypeOf(IsomorphicCookie)).call.apply(_ref, [this].concat(args))), _this), _this.View = _View2.default, _this.Model = Model, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IsomorphicCookie, [{
        key: 'getInitialState',
        value: function getInitialState(initialState) {
            return _extends({}, initialState, {
                count: this.getCount()
            });
        }
    }, {
        key: 'getCount',
        value: function getCount() {
            return Number(this.cookie('count')) || 0;
        }
    }, {
        key: 'saveCount',
        value: function saveCount() {
            var state = this.store.getState();
            return this.cookie('count', state.count);
        }
    }, {
        key: 'pageWillLeave',
        value: function pageWillLeave() {
            this.saveCount();
        }
    }, {
        key: 'windowWillUnload',
        value: function windowWillUnload() {
            this.saveCount();
        }
    }]);

    return IsomorphicCookie;
}(_controller2.default);

exports.default = IsomorphicCookie;