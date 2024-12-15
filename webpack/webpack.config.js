// vie 容易入手 ，webpack有难度，要配置
// commonjs  node 模块化方案
// 启动一个server 5173 
// index.html 首页
// src/main.js 入口文件
// 打包  bundle  webpack 一切静态资源皆可打包

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development", // 开发环境而打包
    entry: "./src/main.js", // 入口文件
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist") // 输出文件  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]  //为什么两个，因为css-loader 处理完css文件后，返回的是js代码，需要style-loader来将js代码插入到html文件中
            }, {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "public"),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VueLoaderPlugin()
    ]
}