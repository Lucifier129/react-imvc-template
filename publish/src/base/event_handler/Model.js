"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Model of IMVC
 */

var initialState = exports.initialState = {
    count: 0

    // 返回新的 state 才会触发 view 更新
};var INCREMENT = exports.INCREMENT = function INCREMENT(state) {
    return _extends({}, state, {
        count: state.count + 1
    });
};

var DECREMENT = exports.DECREMENT = function DECREMENT(state) {
    return _extends({}, state, {
        count: state.count - 1
    });
};