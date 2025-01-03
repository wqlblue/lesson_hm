const path = require("path"); // nodejs核心模块，专门用来处理路径问题

module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出
    output: {
        // 文件的输出路径
        // __dirname nodejs的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"), // 绝对路径
        // 文件名
        filename: "main.js",

        // 自动清空上次打包的内容
        // 原理：在打包前，将path整个目录内容清空，再进行打包
        clean: true,
    },
    // 加载器
    module: {
        // loader的配置
        rules: [

            {
                test: /\.css$/,  // 只检测.css文件
                // use数组中loader执行顺序：从右到左
                use: ["style-loader",  // 将js中的css通过创建style标签添加到html文件中生效
                    "css-loader"],   // 将css资源编译成commonjs的模块到js中
            },
            {// loader : xx    只能使用一个loader

                test: /\.less$/,  // 只检测.css文件
                // use数组中loader执行顺序：从右到左
                use: ["style-loader",  // 将js中的css通过创建style标签添加到html文件中生效
                    "css-loader",
                    "less-loader"],
            },
        ],
    },
    // 插件
    plugins: [
        // plugin的配置
    ],
    // 模式
    mode: "development",
};