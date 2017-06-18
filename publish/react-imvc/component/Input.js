'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setValueByPath = _util2.default.setValueByPath,
    getValueByPath = _util2.default.getValueByPath;

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$context = _this.context,
          state = _this$context.state,
          handleInputChange = _this$context.handleInputChange;
      var _this$props = _this.props,
          name = _this$props.name,
          onChange = _this$props.onChange,
          check = _this$props.check,
          transformer = _this$props.transformer;

      var currentValue = event.currentTarget.value;
      var path = check ? name + '.value' : name;
      var oldValue = getValueByPath(state, path);

      if (typeof transformer === 'function') {
        currentValue = transformer(currentValue);
      }
      if (handleInputChange) {
        currentValue = handleInputChange(path, currentValue, oldValue);
      }

      var newState = setValueByPath(state, path, currentValue);

      _this.setGlobalState(newState);
      onChange && onChange(event);
    }, _this.handleFocus = function (event) {
      var state = _this.context.state;
      var _this$props2 = _this.props,
          name = _this$props2.name,
          onFocus = _this$props2.onFocus;

      var path = name + '.isWarn';
      var isWarn = getValueByPath(state, path);
      if (!isWarn) {
        return;
      }
      var newState = setValueByPath(state, path, false);

      _this.setGlobalState(newState);
      onFocus && onFocus(event);
    }, _this.handleBlur = function (event) {
      var state = _this.context.state;
      var _this$props3 = _this.props,
          name = _this$props3.name,
          onBlur = _this$props3.onBlur,
          check = _this$props3.check;

      var pathOfValidState = name + '.isValid';
      var pathOfWranState = name + '.isWarn';

      var isValidValue = check(event.currentTarget.value);
      var newState = state;

      newState = setValueByPath(newState, pathOfValidState, isValidValue);
      newState = setValueByPath(newState, pathOfWranState, !isValidValue);

      _this.setGlobalState(newState);
      onBlur && onBlur(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var state = this.context.state;

      var _props = this.props,
          as = _props.as,
          name = _props.name,
          value = _props.value,
          check = _props.check,
          actionType = _props.actionType,
          transformer = _props.transformer,
          subProps = _objectWithoutProperties(_props, ['as', 'name', 'value', 'check', 'actionType', 'transformer']);

      var Tag = as;

      var path = check ? name + '.value' : name;

      if (value === undefined) {
        value = getValueByPath(state, path);
      }

      subProps.value = value;
      subProps.name = name;
      subProps.onChange = this.handleChange;
      if (check) {
        subProps.onFocus = this.handleFocus;
        subProps.onBlur = this.handleBlur;
      }

      return _react2.default.createElement(Tag, subProps);
    }
  }, {
    key: 'getAction',
    value: function getAction() {
      return this.context.actions[this.props.actionType];
    }
  }, {
    key: 'setGlobalState',
    value: function setGlobalState(newState) {
      var CALL_ACTION = this.getAction();
      CALL_ACTION(newState);
    }
  }]);

  return Input;
}(_react.Component);

Input.contextTypes = {
  state: _react.PropTypes.object,
  actions: _react.PropTypes.object,
  handleInputChange: _react.PropTypes.func
};
Input.defaultProps = {
  as: 'input',
  type: 'text',
  name: '',
  actionType: 'UPDATE_INPUT_VALUE'
};
exports.default = Input;