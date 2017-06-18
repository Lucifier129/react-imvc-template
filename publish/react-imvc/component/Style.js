'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Style;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preload = require('./Preload');

var _Preload2 = _interopRequireDefault(_Preload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Style(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(_Preload2.default, { as: PreloadStyle, name: name });
}

// IE8 不支持用 React 的方式创建 style 标签，改用 InnerHTML
function PreloadStyle(props) {
  var html = {
    __html: '<style type="text/css" data-preload="' + props['data-preload'] + '">' + props.children + '</style>'
  };
  return _react2.default.createElement('div', { dangerouslySetInnerHTML: html });
}

// function PreloadStyle (props) {
//   return (
//     <style
//       type='text/css'
//       data-preload={props['data-preload']}
//       dangerouslySetInnerHTML={{ __html: props.children }}
//     />
//   )
// }