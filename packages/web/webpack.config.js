const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: true
  },
  externals: ['React', 'ReactDOM'],
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
}
