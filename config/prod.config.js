var baseConfig = require('./base.config.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var injectEnvironment = new webpack.DefinePlugin({
  __ENV__: JSON.stringify("prod")
});

module.exports = Object.assign(baseConfig, {
  debug: false,
  output: {
    filename: 'prod-bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        }
    }),
    new HtmlWebpackPlugin({
      title: "Calendar App",
      filename: 'prod-bundle.html'
    }),
    injectEnvironment
  ]
});
