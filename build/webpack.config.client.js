const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

// 判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [                                  // 用在浏览器端打包
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ?  '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
]

let config

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
        errors: true,        // 错误显示在网页上
    },
    hot: true               // 组件热重载，需要下面两个插件配合
}

if (isDev) {
    config = merge(baseConfig, {
        devtool: '#cheap-module-eval-source-map',  // 调试时可以映射代码
        module: {
            rules: [{
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']                        // 将框架库文件单独打包到一起
        },
        output: {
            filename:  '[name].[chunkhash:8].js'
        },
        module: {
            rules: [{
                test: /\.styl/,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        'stylus-loader'
                    ]
                })
            }]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({       // 将框架库文件单独打包到一起
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({           // webpack文件单独打包到一起
                name: 'runtime'
            })
        ])
    })
}


module.exports = config

