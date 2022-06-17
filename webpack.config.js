const path = require("path")
 // 引入自动生成 html 的插件
 const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 指定入口，相对路径
    output: { 
      //输出的目录，绝对路径
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "main.js" ,// 出口文件名
      //删除上次的文件夹在打包
      clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',//建议绝对路径 相对有时会出错 以那个模板执行
            filename: 'index.html'
          })
    ],
    devServer: {
        port: 3000, // 端口号
        open: true
    }
}