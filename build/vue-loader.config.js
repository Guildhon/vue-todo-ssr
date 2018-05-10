module.exports = (isDev) => {
  return {
    preserveWhitespace: true,            //去掉vue文件的html之间的空格
    extractCSS: !isDev,                   // 将vue文件的所有的css抽离出来打包
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 修改class名字，这样更容易定位位置,保密性好，不会重复；其实用scope也可以
      camelCase: true                     // 把css的-变成js的变量的驼峰
    }
    // hotReload: false,              // 根据环境变量生成
  }
}
