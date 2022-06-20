const { resolve } = require("path")

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
    plugins: [],

    // 模式
    mode:"development"
}
