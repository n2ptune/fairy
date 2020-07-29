const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'fairy.app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          shadowMode: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: function(el) {
                const _shadowContainer = document.querySelector(
                  '#fairy-app-container'
                )

                console.log(_shadowContainer)

                const _shadowRoot = _shadowContainer.shadowRoot
                const lastInsertedElement =
                  window._lastElementInsertedByStyleLoader

                if (!lastInsertedElement) {
                  _shadowRoot.insertBefore(el, _shadowRoot.firstChild)
                } else if (lastInsertedElement.nextSibling) {
                  _shadowRoot.insertBefore(el, lastInsertedElement.nextSibling)
                } else {
                  _shadowRoot.appendChild(el)
                }

                window._lastElementInsertedByStyleLoader = el
              }
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    process.env.NODE_ENV === 'development'
      ? new HtmlWebpackPlugin({ template: './public/index.html' })
      : function() {}
  ]
}
