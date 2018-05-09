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

