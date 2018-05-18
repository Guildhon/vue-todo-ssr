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
    new HTMLPlugin({
      template: path.join(__dirname, 'template.html')
    })
]

let config

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
        errors: true,        // 错误显示在网页上
    },
    historyApiFallback: {
      index: '/public/index.html' // 当匹配的文件不存在时取配置的文件
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
                    'vue-style-loader',
                    /*{
                        loader: 'css-loader',
                        options: {
                            module: true,         // 开启了css的module功能
                            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 修改class名字，这样更容易定位位置,保密性好，不会重复；其实用scope也可以
                        }

                     // 使用
                     import className from '../../assert/styles/footer.styl'
                     return (
                        <div id={className.footer}>
                        <span>writtern by {this.author}</span>
                        </div>
                     )


                    },*/
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
                    fallback: 'vue-style-loader',
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

