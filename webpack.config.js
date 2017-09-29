var path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.jsx'),
  output: {
    path: path.resolve(__dirname + '/'),
    filename: 'webpack-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}
