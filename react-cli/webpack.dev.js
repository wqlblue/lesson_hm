const path = require("path")
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 返回处理样式loader
const getStyleLoader = (pre) => {
    return [

        "style-loader",
        "css-loader",
        {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性处理哪些浏览器
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: ["postcss-preset-env"],
                },
            },
        },
        pre

    ].filter(Boolean);
}
module.exports = {
    entry: "./src/main.js",
    output: {
        path: undefined,
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
    },
    module: {
        rules: [
            // 处理css
            {
                test: /\.css$/,
                use: getStyleLoader()
            },
            {
                test: /\.less$/,
                use: getStyleLoader("less-loader")
            }, {
                test: /\.s[ac]ss$/,
                use: getStyleLoader("sass-loader")
            }, {
                test: /\.styl$/,
                use: getStyleLoader("stylus-loader")
            },

            // 处理图片
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 小于10kb的图片转base64
                        // 优点：减少请求数量  缺点：体积会更大
                        maxSize: 10 * 1024 // 10kb
                    }
                }
            },
            // 处理其他资源
            {
                test: /\.(ttf|woff2?|map3|map4|avi)$/,
                type: "asset/resource"
            },
            // 处理js
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader",
                options: { //options允许你自定义Babel的行为，以满足项目的具体需求。
                    cacheDirectory: true,
                    cacheCompression: false, // 关闭缓存文件压缩
                }
            }
        ],
    },
    // 处理html
    plugins: [
        new EslintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules", // 默认值
            cache: true, // 开启缓存
            // 缓存目录
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/.eslintcache"
            ),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    mode: 'development',
    devtool: "cheap-module-source-map",
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}.js`,
        },

    },
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        hot: true
    }
};