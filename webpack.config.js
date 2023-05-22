const path = require('path'); // Node.js модуль для разрешения путей файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'app.bundle.js',
},
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader'
            ]
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCSSExtractPlugin()
]
};
