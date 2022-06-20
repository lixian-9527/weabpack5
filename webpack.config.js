const { resolve } = require("path")
// 引用插件 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        rules: []
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
        })
    ],

    // 模式
    mode:"development"
}
