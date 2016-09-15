var path = require('path')
console.log("__dirname", __dirname);

module.exports = {
  entry: path.resolve(__dirname + '/src/entry.jsx'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'webpack-bundle.js'
  }
}
