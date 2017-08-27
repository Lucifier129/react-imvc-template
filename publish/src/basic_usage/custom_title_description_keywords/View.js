"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
    var state = _ref.state;

    return _react2.default.createElement(
        _Layout2.default,
        null,
        "Title: ",
        _react2.default.createElement(_component.Input, { name: "html.title" })
    );
}