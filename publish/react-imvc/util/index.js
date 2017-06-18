'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  toJson: toJson,
  toText: toText,
  isAbsoluteUrl: isAbsoluteUrl,
  mapValues: mapValues,
  isImage: isImage,
  isThenable: isThenable,
  registerModal: registerModal,
  openModal: openModal,
  closePopup: closePopup,
  setValueByPath: setValueByPath,
  getValueByPath: getValueByPath,
  debounce: debounce
};


function toJson(res) {
  return res.json();
}

function toText(res) {
  return res.text();
}

function isAbsoluteUrl(url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0;
}

function mapValues(obj, fn) {
  return Object.keys(obj).reduce(function (result, key) {
    result[key] = fn(obj[key], key);
    return result;
  }, {});
}

function isImage(url) {
  var extname = url.substr(url.lastIndexOf('.') + 1);
  return (/(jpg|png|gif|jepg)/.test(extname)
  );
}

function isThenable(obj) {
  return obj != null && typeof obj.then === 'function';
}

// 弹窗公共方法
var modals = {};

function registerModal(type, Modal) {
  if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
    return Object.keys(type).forEach(function (key) {
      return registerModal(key, type[key]);
    });
  }
  modals[type] = Modal;
}

// 获取DOM结点
var getModalContainer = function getModalContainer() {
  return document.getElementById('modal');
};

function openModal(_ref) {
  var type = _ref.type,
      props = _ref.props;

  var Modal = modals[type];
  if (!Modal) {
    return;
  }

  var onClose = function onClose(event) {
    props && props.onClose && props.onClose(event);
    closePopup();
  };
  _reactDom2.default.render(_react2.default.createElement(Modal, _extends({}, props, { onClose: onClose })), getModalContainer());
}

function closePopup() {
  _reactDom2.default.unmountComponentAtNode(getModalContainer());
}

function setValueByPath(obj, path, value) {
  path = !Array.isArray(path) ? path.split('.') : path;
  var list = path.reduce(function (list, key, index) {
    if (index === path.length - 1) {
      list[index][key] = value;
    } else {
      var target = list[index][key];
      if (Array.isArray(target)) {
        target = target.concat();
      } else {
        target = _extends({}, target);
      }
      list[index][key] = target;
      list.push(target);
    }
    return list;
  }, [_extends({}, obj)]);

  return list[0];
}

function getValueByPath(obj, path) {
  path = !Array.isArray(path) ? path.split('.') : path;
  return path.reduce(function (ret, key) {
    return ret[key];
  }, obj);
}

function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}