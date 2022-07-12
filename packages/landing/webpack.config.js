// add in imports
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

// add in plugins array
new VueLoaderPlugin(),
new MiniCssExtractPlugin(),
new HtmlWebpackPlugin({
  template:"./src/index.html"
})

/** @type {import('webpack').Configuration} */
const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: ['./src/main.ts']
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        exclude: /(node_modules)/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.ts$/i,
        exclude: /(node_modules)/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: false
            }
          }
        ]
      },
      {
        test: /\.html/i,
        exclude: /(node_modules)/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}

module.exports = config