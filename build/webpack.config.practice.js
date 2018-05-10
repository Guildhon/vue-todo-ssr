const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [                                  // 用在浏览器端打包
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
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
  hot: true               // 组件热重载，需要下面两个插件配合
}


config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',  // 调试时可以映射代码
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        'vue-style-loader',
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
  // import Vue from 'vue，使用vue.esm.js可以在vue里面使用template
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})



module.exports = config

