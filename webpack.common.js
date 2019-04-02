const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './front/src/App.jsx',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist/*']
    }),
    new HtmlWebpackPlugin({
      title: 'Eureca',
      template: './front/src/index.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
      options: {
        formatter: require("eslint-friendly-formatter"),
        fix: true,
        emitError: true
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/env"],
            "@babel/react"
          ]
        }
      },
    },
    {
      test: /\.(css|scss)$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  }
};