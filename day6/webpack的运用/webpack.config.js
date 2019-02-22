var path = require('path');
module.exports = {
    entry: { //入口文件
        app: './main.js'
    },
    output: { //输出
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    // module: { //解析器   不同类型的文件
    //     rules: [{
    //         test: /\.(js|jsx)$/, //要匹配的文件类型
    //         loader: 'babel-loader', //本地下载
    //         options: {
    //             paesets: ['@babel/preset-env']
    //         }
    //     }, {
    //         test: /\.css$/,
    //         use: ['style-loader', 'css-loader'] //先创建后解析
    //     }]
    // },
    // //第三方插件
    // plugins: [
    //     new HtmlPlugin({
    //         template: './aa.html',
    //         filename: './index.html'
    //     }),
    //     //模块热更新
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    // //起服务
    // devServer: {
    //     port: 9090,
    //     open: true,
    // }
}