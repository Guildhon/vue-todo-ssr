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

husky但我们使用git的commit的时候校验代码是否通过eslint，不通过则不commit

