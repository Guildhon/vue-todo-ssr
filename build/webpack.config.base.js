const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

// 判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: "web",
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_moudles/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,     // 默认是打包到另一个文件，如果超过1024则转成base64
                            name: 'resources/[path][name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}


module.exports = config

