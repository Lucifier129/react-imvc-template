var webpack = require('webpack')
var path = require('path')
var pkg = require('../../package')

module.exports = {
  target: 'node',
  entry: {
    routes: path.join(__dirname, '../../src')
  },
  output: {
    path: path.join(__dirname, '../server'),
    filename: 'routes.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../../node_modules/react-imvc'),
          path.resolve(
            __dirname,
            `../../node_modules/.${require('../package').version}@react-imvc`
          )
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ],
  externals: Object.keys(pkg.dependencies)
    .concat(Object.keys(pkg.devDependencies)),
  resolve: {
    extensions: ['', '.js'],
    root: __dirname,
    alias: {}
  }
}
