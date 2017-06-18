"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 共享的 action 函数
 */

var INDENTITY = exports.INDENTITY = function INDENTITY(state) {
  return state;
};

var UPDATE_STATE = exports.UPDATE_STATE = function UPDATE_STATE(state, newState) {
  return _extends({}, state, newState);
};

var UPDATE_INPUT_VALUE = exports.UPDATE_INPUT_VALUE = UPDATE_STATE;