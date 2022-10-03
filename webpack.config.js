const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My First Portfolio',
            filename: 'index.html',
            template: './src/template.html',
        }),
    ]
}