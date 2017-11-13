const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const API_URL = {
  development: JSON.stringify('http://localhost:3000'),
  production: JSON.stringify('https://ep-todo-list-api.herokuapp.com')
}

const env = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

const extractSCSS = new ExtractTextPlugin({
  filename: 'css/todo.css'
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html'
});

const compressionPlugin = new CompressionPlugin({
  test: /(.js|.css)$/
});

const definePlugin = new webpack.DefinePlugin({
  __API__: API_URL[env]
});

module.exports = {
  entry: path.join(__dirname, 'src', 'app.module.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/todo.js'
  },

  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        parser: {
          amd: false,
        }
      },

      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          use: [
            {
              loader: 'css-loader'
            },

            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },

            {
              loader: 'sass-loader'
            }
          ]
        })
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?name=[name].[ext]&outputPath=images/']
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.html$/,
        use: ['html-loader']
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=../']
      }
    ]
  },

  plugins: [
    extractSCSS,
    htmlPlugin,
    compressionPlugin,
    definePlugin
  ]
}
