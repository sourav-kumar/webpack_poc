var path = require('path');
var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './es6/main.js',
    vendor: 'lodash'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { 
        test: path.join(__dirname, 'es6'),
        exclude:/node_modules/,
        loader: 'babel-loader' ,
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: function (module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'html/index.html'
    })
  ]
};