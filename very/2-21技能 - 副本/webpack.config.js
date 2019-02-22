let path = require('path');
let webpack = require('webpack');
let devServer = require('webpack-dev-server');
module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        port: 8980,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}