var path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/../src/main-env-entry.jsx'),
  debug: true,
  output: {
    path: path.resolve(__dirname + '/../'),
    filename: 'webpack-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css/,
        loaders: ['style', 'css']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
