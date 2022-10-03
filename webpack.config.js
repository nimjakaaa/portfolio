const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/ressource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My First Portfolio',
            filename: 'index.html',
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin(),
    ],
}