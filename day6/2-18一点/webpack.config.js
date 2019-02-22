let path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
module.exports = {
    entry: { //入口文件
        app: './main.js'
    },
    output: { //输出
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        hot: true
    }
}