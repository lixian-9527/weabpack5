const { resolve } = require("path");
// 引用插件 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 引用插件 mini-css-extract-plugin
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

// 引入插件optimize-css-assets-webpack-plugin
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/index.js',

    // 输出
    output: {
        filename: "build.js",
        path: resolve(__dirname, 'build')
    },

    // 加载器
    module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理，use中执行顺序右到左，下到上
                use: [
                    // 创建style标签，将js中的样式资源插入添加到header中生效,
                    // MiniCssExtractPlugin.loader将css打包单独文件，再通过link标签引入css
                    MiniCssExtractPlugin.loader,
                    // 将css文件加载到js中，里面内容是样式字符串
                    'css-loader',
                    // 处理不同浏览器css兼容问题
                    'postcss-loader'
                ]
            },
            // 打包less,MiniCssExtractPlugin.loader将css打包单独文件，再通过link标签引入css
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader', 'postcss-loader']
            },
            // 打包sass,MiniCssExtractPlugin.loader将css打包单独文件，再通过link标签引入css
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader', 'postcss-loader']
            }

        ]
    },

    // 插件
    plugins: [
        // 构造方法默认会创建一个空的HTML文件，自动引入打包输出的所有资源（js/css）
        // new HtmlWebpackPlugin()

        // 通过参数可以输出有结构的HTML资源
        new HtmlWebpackPlugin({
            // 指定要打包的HTML，并自动引入打包输出的所有资源
            template: './src/index.html',
            // 设置输出文件名称，默认index.html
            filename: 'index.html',
            // 功能: 压缩HTML代码，生产模式自动压缩
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),

        // 使用单独打包css插件
        new MiniCssExtractPlugin(),

        // 打包压缩css的注释和空格
        new OptimizeCssAssetsWebpackPlugin()
    ],

    // 模式
    mode:"development"
};
