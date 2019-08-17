const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],

  output: {
    path: path.resolve('/dist/'),
    filename: 'index_bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/img/[name].[ext]',
            outputPath: 'dist/img/',
          },
        },
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader'],
        }),
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {test: /modernizr/, loader: 'imports-loader?this=>window!exports-loader?window.Modernizr'},
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'public/fonts/[name].[ext]',
          outputPath: 'dist/fonts',
        },
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: './resources/index.html',
      filename: './index.html',
      hash: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: path.resolve("/src/resources"),
    watchContentBase: true,
  },
};
