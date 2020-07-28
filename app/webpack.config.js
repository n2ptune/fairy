const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: './test.js',
  output: {
    filename: 'fairy.dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()]
}
