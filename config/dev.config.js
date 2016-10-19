var baseConfig = require('./base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var injectEnvironment = new webpack.DefinePlugin({
  __ENV__: JSON.stringify("dev")
});

module.exports = Object.assign(baseConfig, {
  output: {
    filename: 'dev-bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Calendar App Dev",
      filename: 'bundle.html'
    }),
    injectEnvironment
  ]
})
