const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
//entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'main.js',
},
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
      },
      {
        test: /\.css$/,
        use: [
            MiniCSSExtractPlugin.loader, 
          'css-loader',
        ],
      },
    ],
  },
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: "./index.html"
    }),
    new MiniCSSExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
]
};
