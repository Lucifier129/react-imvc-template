'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressReactViews = require('express-react-views');

var _expressReactViews2 = _interopRequireDefault(_expressReactViews);

var _shareRoot = require('../middleware/shareRoot');

var _shareRoot2 = _interopRequireDefault(_shareRoot);

var _wrapRender = require('../middleware/wrapRender');

var _wrapRender2 = _interopRequireDefault(_wrapRender);

var _package = require('../../package');

var _package2 = _interopRequireDefault(_package);

var _server = require('../../server.config');

var _server2 = _interopRequireDefault(_server);

var _page = require('../page');

var _page2 = _interopRequireDefault(_page);

var _routes = require('../../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

exports.default = app;


app.use((0, _shareRoot2.default)(_server2.default.basename));
app.use((0, _helmet2.default)(_server2.default.helmet));
app.use((0, _compression2.default)());

if (_server2.default.favicon) {
  app.use((0, _serveFavicon2.default)(_server2.default.favicon));
}

app.engine('js', _expressReactViews2.default.createEngine({
  beautify: process.env.NODE_ENV === 'development',
  transformViews: false
})

// view engine setup
);app.set('views', _path2.default.join(__dirname, '../../routes'));
app.set('view engine', 'js');

app.use((0, _wrapRender2.default)({
  defaults: _server2.default
}));

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json({
  limit: '10MB'
}));
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser2.default)());

app.get('/slbhealthcheck.html', function (req, res) {
  res.send('slbhealthcheck ok');
}

// shareRoot 中间件把 config.basename 裁剪了，所以这里也裁剪一下才可以匹配成功
);var staticPublicPath = _server2.default.publicPath.indexOf(_server2.default.basename) === 0 ? _server2.default.publicPath.replace(_server2.default.basename, '') : _server2.default.publicPath;
if (process.env.NODE_ENV === 'development' || process.env.BUILD === '1') {
  // 开发模式用 webpack-dev-middleware 代理 js 文件
  var setupDevEnv = require('../build/setup-dev-env');
  app.use(setupDevEnv.setupClient(staticPublicPath)

  // 开发模式里，用 src 里的静态资源
  );app.use(staticPublicPath, _express2.default.static(_path2.default.join(__dirname, '../../src')));
} else if (!/^((https?:)?\/\/).+/.test(staticPublicPath)) {
  // 非绝对路径才用 node.js 做静态服务，否则是 CDN 地址，不必代理
  app.use(staticPublicPath, _express2.default.static(_path2.default.join(__dirname, '../../dest')));
}

app.use('/mock', function (req, res, next) {
  var target = req.url;

  var filePath = _path2.default.join(__dirname, '../../src', target + '.json');
  try {
    var data = _fs2.default.readFileSync(filePath, 'utf-8').toString();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

if (_routes2.default) {
  Object.keys(_routes2.default).forEach(function (key) {
    var route = _routes2.default[key];
    if (typeof route === 'function') {
      route(app);
    }
  });
}

app.use(_page2.default

// catch 404 and forward to error handler
);app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

// error handlers

// development error handler
// will print stacktrace
);if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    var message = (err.message + '\n' + err.stack).split('\n').map(function (item) {
      return '<p style="margin:0;padding:0">' + item + '</p>';
    }).join('');
    res.send(message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});