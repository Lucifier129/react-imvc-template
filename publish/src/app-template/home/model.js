"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.INCREMENT = INCREMENT;
/**
 * 数据层 model
 */

// 初始化状态
var initialState = exports.initialState = {
  count: 0, // 计数
  num: 1 // 每次增加的幅度


  // 修改状态的 action 函数
};function INCREMENT(state) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  // 返回新状态，才会触发更新
  return _extends({}, state, {
    count: state.count + num
  });
}