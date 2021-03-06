let path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.jpg$/,
            use: 'url-loader'
        }]
    }
}