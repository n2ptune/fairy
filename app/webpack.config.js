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
        test: /\.m?js$/,
        exclude:
          process.env.NODE_ENV === 'production'
            ? path.resolve(__dirname, 'node_modules/')
            : [],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: function(el) {
                const _shadowContainer = document.querySelector(
                  '#fairy-app-container'
                )
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
          {
            loader: 'css-loader',
            options: {}
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './styles/'),
      '@components': path.resolve(__dirname, './components/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    process.env.NODE_ENV === 'development'
      ? new HtmlWebpackPlugin({ template: './public/index.html' })
      : function() {}
  ],
  devServer: {
    port: 9000
  }
}
