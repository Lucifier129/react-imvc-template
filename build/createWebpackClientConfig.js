var webpack = require('webpack')
var path = require('path')
var BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer'
).BundleAnalyzerPlugin
var StatsPlugin = require('./webpack.stats.plugin')
var OptimizeJsPlugin = require('optimize-js-plugin')

/**
 * 动态确定的 webpack 配置
 * options = {
 *     root,
 *     alias,
 *     entry,
 *     output,
 *     productionOutput,
 *     codeSpliting,
 *     bundleAnalyzer,
 *     NODE_ENV,
 * }
 */
module.exports = function createWebpackClientConfig(options) {
    var config = Object.assign({}, options)
    var alias = Object.assign({}, config.alias)
    var indexEntry = path.join(__dirname, '../entry/client')

    var root = path.join(config.root, config.src)
    var NODE_ENV = config.NODE_ENV

    var entry = Object.assign({}, config.entry, {
        index: [indexEntry],
        vendor: [
          'babel-polyfill',
          'react',
          'react-dom',
          'relite',
          'create-app',
          'classnames',
          'querystring',
          'fetch-ie8',
          'js-cookie',
          path.join(__dirname, '../polyfill'),
          path.join(__dirname, '../component'),
          path.join(__dirname, '../controller'),
          path.join(__dirname, '../util'),
        ]
      })

      // 对 index 和 vendor 特殊处理
      if (config.entry) {
        if (config.entry.index) {
          entry.index = entry.index.concat(config.entry.index)
        }
        if (config.entry.vendor) {
          entry.vendor = entry.vendor.concat(config.entry.vendor)
        }
      }

      var defaultOutput = {
        path: path.join(config.root, config.publish, config.static),
        filename: `[name].js`,
        chunkFilename: '[name].js'
      }

      var output = Object.assign(defaultOutput, config.output)

      var plugins = [
        new StatsPlugin(config.statsPath),
        // new webpack.optimize.OccurrenceOrderPlugin(false),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //   children: true,
        //   minChunks: 3
        // }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
      ]
      var watch = true
      var devtool = '#source-map'
      var postLoaders = []

      if (config.codeSpliting) {
        postLoaders.push({
          test: /[cC]ontroller\.jsx?$/,
          loader: 'bundle-loader',
          query: {
            lazy: true,
            name: '[1]/js/mvc',
            regExp: `${root}/(.+)/[cC]ontroller`
          },
          exclude: /node_modules/
        })
      }

      if (NODE_ENV === 'production') {
        var productionDefaultOutput = {
          path: '',
          filename: '[name]-[hash:6].js',
          chunkFilename: '[name]-[chunkhash:6].js'
        }
        output = Object.assign(
          productionDefaultOutput,
          config.productionOutput
        )
        plugins = plugins.concat([
          // banner
          // new webpack.BannerPlugin(banner),
          new webpack.optimize.DedupePlugin(),
          // minify JS
          new webpack.optimize.UglifyJsPlugin({
            // beautify: true,
            compress: {
              unused: true,
              drop_console: true,
              drop_debugger: true,
              dead_code: true,
              properties: false,
              warnings: false,
              screw_ie8: false,
            },
            mangle: {
              screw_ie8: false
            },
            output: {
              screw_ie8: false
            },
            comments: false
          }),
          new OptimizeJsPlugin({
            sourceMap: false
          })
        ])

        watch = false
        devtool = ''
      }

      if (config.bundleAnalyzer) {
        plugins = plugins.concat([
          new BundleAnalyzerPlugin(Object.assign({
            // Automatically open analyzer page in default browser
            openAnalyzer: true,
            // Analyzer HTTP-server port
            analyzerPort: 8090
          }, bundleAnalyzer))
        ])
      }

      return {
        watch: watch,
        devtool: devtool,
        entry: entry,
        output: output,
        module: {
          preLoaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }],
          postLoaders: postLoaders,
        },
        plugins: plugins,
        resolve: {
          modulesDirectories: [
            path.resolve('node_modules'),
            path.join(root, 'node_modules'),
            path.join(__dirname, '../node_modules')
          ],
          extensions: ['', '.js', '.jsx'],
          root: root,
          alias: alias
        }
      }
    }