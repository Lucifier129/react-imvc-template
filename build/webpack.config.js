var webpack = require('webpack')
var path = require('path')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var StatsPlugin = require('./webpack.stats.plugin')
var OptimizeJsPlugin = require("optimize-js-plugin")

var banner = `last-modify-date:${new Date().toLocaleString()}`
var outputPath = path.join(__dirname, '../static/javascript')
var alias = {
  /**
   * 将 moment 指向特殊构造的 share/moment 文件夹
   * 不改变引用方式，在浏览器端可以减少体积
   * 在 Node.js 里没有 webpack alias，会找真实的地址 node_modules/moment
   * 如果在浏览器端里需要引用更多 moment 里的模块
   * 需要从 node_modules/moment 里按照一致的目录结构，把模块拷贝至 share/moment
   */
  'moment': path.join(__dirname, '../src/share/moment'),
  /**
   * rome package 里有很多跟 babel-polyfill 重复的 polyfill 文件
   * 抽取出来，造一个干净版，用法不变
   */
  'rome': path.join(__dirname, '../src/share/rome'),
  'node_modules': path.join(__dirname, '../node_modules'),
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
    'whatwg-fetch',
    'moment',
    'rome',
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