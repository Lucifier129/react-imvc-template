'use strict';

var path = require('path');
var vm = require('vm');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var MFS = require('memory-fs');
var clientConfig = require('./webpack.config');
var serverConfig = require('./webpack.config.server');

exports.setupClient = function setupClient(publicPath) {
  var clientDevMiddleware = webpackDevMiddleware(webpack(clientConfig), {
    publicPath: publicPath,
    stats: {
      colors: true,
      chunks: false
    },
    serverSideRender: true
  });
  return clientDevMiddleware;
};

exports.setupServer = function setupServer(options) {
  var serverCompiler = webpack(serverConfig);
  var mfs = new MFS();
  var outputPath = path.join(serverConfig.output.path, serverConfig.output.filename);
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, function (err, stats) {
    if (err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(function (err) {
      return console.error(err);
    });
    stats.warnings.forEach(function (err) {
      return console.warn(err);
    });
    var sourceCode = mfs.readFileSync(outputPath, 'utf-8'

    // 构造一个 commonjs 的模块加载函数，拿到 newModule
    );var newModule = vm.runInThisContext('\n\t\t\t(function(require) {\n\t\t\t\tvar module = {exports: {}}\n                var factory = function(require, module, exports) {\n                    ' + sourceCode + '\n                }\n                try {\n                    factory(require, module, module.exports)\n                } catch(error) {\n                    console.log(error)\n                    return null\n                }\n                return module.exports\n\t\t\t})\n\t\t')(require);

    if (newModule) {
      options.handleHotModule(newModule.default || newModule);
    }
  });
};