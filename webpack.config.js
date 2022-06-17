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
    },
    module: { 
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            use: [ "style-loader", "css-loader"]//解析规则从后往前
          },
          {
            test: /\.less$/,
            use: [ "style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[hash:6][ext]'
                }
            },
            {//图标
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
    	            filename: 'fonts.[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                exclude: path.join(__dirname, 'node_modules'),
                use: [{
                  loader: 'babel-loader',
                }]
              },
        ]
    }
}