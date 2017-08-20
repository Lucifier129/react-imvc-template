'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(props) {
  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui'
      }),
      _react2.default.createElement('meta', { content: 'yes', name: 'apple-mobile-web-app-capable' }),
      _react2.default.createElement('meta', {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      }),
      _react2.default.createElement('meta', { content: 'black', name: 'apple-mobile-web-app-status-bar-style' }),
      _react2.default.createElement(
        'title',
        null,
        props.title
      ),
      _react2.default.createElement('meta', { name: 'description', content: props.description }),
      _react2.default.createElement('meta', { name: 'keywords', content: props.keywords })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: props.content } }),
      _react2.default.createElement('div', { id: 'modal' }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: '\n            (function() {\n              window.__INITIAL_STATE__ = ' + JSON.stringify(props.initialState) + '\n              window.__APP_SETTINGS__ = ' + JSON.stringify(props.appSettings) + '\n              window.__PUBLIC_PATH__ = \'' + props.publicPath + '\'\n            })()\n          '
        }
      }),
      _react2.default.createElement('script', { src: props.publicPath + '/' + props.assets.vendor }),
      _react2.default.createElement('script', { src: props.publicPath + '/' + props.assets.index })
    )
  );
} // custom layout