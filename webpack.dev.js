const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 4. Injeta CSS no DOM
          'css-loader', // 3. De css para vanilla js

          // 1. De SASS para o CSS
        ],
      },
    ],
  },
});
