
const webpack = require('webpack');
const path = require('path');

// https://webpack.js.org/concepts/

module.exports = {
    entry: {
        'index': './src/index.js',
        'test': [
            './src/file1.js',
            './src/file2.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // loaders...
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};