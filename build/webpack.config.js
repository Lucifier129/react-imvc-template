var webpack = require('webpack')
var path = require('path')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var StatsPlugin = require('./webpack.stats.plugin')
var OptimizeJsPlugin = require("optimize-js-plugin")

var banner = `last-modify-date:${new Date().toLocaleString()}`
var outputPath = path.join(__dirname, '../static/javascript')
var alias = {
  // 'react': 'react-lite',
  // 'react-dom': 'react-lite',
}
var entry = {
  index: './src/index',
  vendor: [
    'react',
    'react-dom',
    'relite',
    'create-app',
    'classnames',
    'querystring',
    'babel-polyfill',
    'whatwg-fetch'
  ]
}
var output = {
  path: outputPath,
  filename: '[name].js',
  chunkFilename: '[name].js'
}

var plugins = [
  new StatsPlugin('../stats.json'),
  // new webpack.optimize.OccurrenceOrderPlugin(false),
  // extract vendor chunks for better caching
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
  }),
  new webpack.optimize.CommonsChunkPlugin({
    children: true,
    minChunks: 5
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
]
var watch = true

if (process.env.NODE_ENV === 'production') {
  output = {
    path: outputPath,
    filename: '[name]-[hash:6].js',
    chunkFilename: '[name]-[chunkhash:6].js'
  }
  plugins = plugins.concat([

      // banner
      new webpack.BannerPlugin(banner),
      new webpack.optimize.DedupePlugin(),
      // minify JS
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new OptimizeJsPlugin({
          sourceMap: false
      })
    ])
    // Object.assign(alias, {
    //     'react': 'react-lite',
    //     'react-dom': 'react-lite',
    // })
  watch = false
}

if (process.env.SHOW === 'yes') {
  plugins = plugins.concat([
    new BundleAnalyzerPlugin({
      // Automatically open analyzer page in default browser
      openAnalyzer: true,
      // Analyzer HTTP-server port
      analyzerPort: 8888
    })
  ])
}

// Object.assign(alias, {
//     'react': 'react-lite',
//     'react-dom': 'react-lite',
// })

module.exports = {
  watch: watch,
  devtool: '#source-map',
  entry: entry,
  output: output,
  module: {
    preLoaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
      // ,{
      //     // set up standard-loader as a preloader
      //     test: /\.jsx?$/,
      //     loader: 'standard',
      //     include: /src/
      // }
    ],
    postLoaders: [{
      test: /controller\.jsx?$/,
      loader: 'bundle-loader',
      query: {
        lazy: true,
        name: '[1]-[folder]',
        regExp: /[\/\\]app-([^\/\\]+)[\/\\]/.source
      },
      exclude: /node_modules/
    }]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
    root: __dirname,
    alias: alias
  }
}