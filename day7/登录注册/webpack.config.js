let path = require('path');
let webpack = require('webpack'); //热加载
let HtmlPlugin = require('html-webpack-plugin'); //构建html
let SetCss = require('extract-text-webpack-plugin'); //抽离css
module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [{ //解析js
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            }
        }, { //解析css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, { //解析图片
            test: /\.(jpg|png|gif)/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.(css|scss|sass)$/,
            use: SetCss.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    devServer: {
        port: 9090,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]
}