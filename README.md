# vue-todo

npm install

npm run build



#### 一些需要注意的
在package的scripts里面写webpack才会去调用项目下载本身的webpack，因为全局webpack可能会有问题，所以推荐在scripts里写

在webpack.config里面__dirname是指当前的目录

url-loader需要file-loader

vue-loader需要vue-template-compiler

css-loader配置style-loader会把css打包到js里

style-loader依赖stylus

cross-env设置环境变量，在package.json里面script设置，在webpack.config.js里面判断

html-webpack-plugin会自动生成一个html入口文件，并引用相关的文件

postcss-loader依赖autoprefixer，给css加兼容前缀

babel-preset-env是babel转码

transform-vue-jsx转化vue里面的jsx

extract-text-webpack-plugin把非javascript的文件单独打包

webpack-merge将webpack拆开的配置进行合并

vue-style-loader使得css可以实现热重载

rimraf用来删除dist目录，如果报错找不到，则cnpm install -D rimraf@2.6.2，这样会从本地库的node_modules里面的.bin查找

eslint-plugin-html使eslint可以识别.vue文件里的html

eslint命令加--fix会自动修复

配置babel-eslint和eslint-loader能在每次改代码保存的时候就去校验

文件.editorconfig规范IDE的行为，我使用的是webstorm，需要开启eslint插件支持

husky但我们使用git的commit的时候校验代码是否通过eslint，不通过则不commit，但得先git init，再安装执行husky

更新webpack
```
项目使用的webpack是3.10.0，如果要升级到4，则需要把原来的webpack包uninstall掉，重新install新的包，然后查看install完报的NPM WARN，重新install更替掉包，有可能未发布的得extract-text-webpack-plugin@next

webpack.config.base.js里面的config需要加个mode
如mode: process.env.NODE_ENV || 'production' // development || production

webpack.config.client.js里面的CommonChunkPlugin已经被废弃掉
解决方案为在config加上属性
optimiztaion:{
   splitChunks: {
      chunks: 'all'         // 这样 vendor: ['vue']也可以删掉
   },
   runtimeChunk: true
}
}

webpack.config.client.js的new webpack.NoEmitOnErrorsPlugin()已经取消掉，将其注释掉

eslint-loader插件需要2.0以上
stylus-loader需要3.0.2以上
vue-loader需要14.0.0以上
```

