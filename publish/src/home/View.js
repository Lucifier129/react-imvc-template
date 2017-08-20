"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _Layout = require("../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function View(_ref) {
  var state = _ref.state;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    state.contents.map(function (_ref2) {
      var type = _ref2.type,
          list = _ref2.list;

      return _react2.default.createElement(
        "div",
        { key: type },
        _react2.default.createElement(
          "h2",
          null,
          type
        ),
        _react2.default.createElement(List, { data: list })
      );
    })
  );
}

function List(_ref3) {
  var data = _ref3.data;

  return _react2.default.createElement(
    "ul",
    null,
    data.map(function (item) {
      return _react2.default.createElement(ListItem, _extends({ key: item.url }, item));
    })
  );
}

function ListItem(_ref4) {
  var title = _ref4.title,
      url = _ref4.url,
      raw = _ref4.raw,
      rest = _objectWithoutProperties(_ref4, ["title", "url", "raw"]);

  return _react2.default.createElement(
    "li",
    null,
    !!raw && _react2.default.createElement(
      "a",
      _extends({ href: url }, rest),
      title
    ),
    !raw && _react2.default.createElement(
      _component.Link,
      _extends({ to: url }, rest),
      title
    )
  );
}