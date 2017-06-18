'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('react-imvc/component');

var _Menu = require('../component/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_component.Style, { name: 'test' }),
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'count: ',
        state.count
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: handlers.handleIncre },
          '\u52A0',
          state.num
        ),
        ' ',
        _react2.default.createElement(
          'button',
          { onClick: handlers.handleDecre },
          '\u51CF',
          state.num
        ),
        ' ',
        _react2.default.createElement(_component.Input, { name: 'num' })
      ),
      _react2.default.createElement(
        'div',
        null,
        '\u6211\u662F\u5C55\u793A ajax \u6570\u636E\u7684\u5BB9\u5668\uFF1A',
        JSON.stringify(state.test)
      ),
      _react2.default.createElement('img', {
        src: state.publicPath + '/app-template/img/Koala.jpg',
        width: 200
      })
    )
  );
}