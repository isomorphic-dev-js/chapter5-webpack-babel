var path = require('path')
console.log("__dirname", __dirname);

module.exports = {
  entry: path.resolve(__dirname + '/../src/entry.js'),
  output: {
    path: path.resolve(__dirname + '/../'),
    filename: 'webpack-bundle.js'
  }
}
