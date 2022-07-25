// add in imports
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('../../build/webpack.config.base')
const merge = require('../../build/merge')
const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports = merge(commonConfig, {
  entry: {
    app: ['./src/main.ts']
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        BASE_URL: '/'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'fairy-landing',
      scriptLoading: 'defer',
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  output: {
    hashFunction: 'xxhash64',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  }
})
