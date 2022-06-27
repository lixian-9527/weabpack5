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
            },
            // 打包图片
            {
                  // // 在webpack5中url-loader、file-loader已经弃用，
                  // test: /\.(jpg|png|gif)$/i,  //i表示忽略图片格式大小写，例如.PNG
                  // loader: 'url-loader',  // url-loader中依赖file-loader 所以我们要同时安装url-loader和file-loader
                  // // 如果想要继续使用则需要:
                  // // 1. 在use后添加type: 'javascript/auto';
                  // // 2.url-loader默认采用ES模块语法，即import ‘…/aaa.png’；
                  // options:{
                  //   // publicPath: './images/', // 注掉，不知为何在打包css图片时'./'当前路径打包不进去
                  //   outputPath: "images/",
                  //   limit: 10*1024, //如果图片小于10k，就使用base64处理，
                  //   esModule:false // url-loader默认采用ES6模块语法  html-loader使用commonJs  所以这里需要关闭es模块语法即可
                  // },
                  // type: 'javascript/auto'

                test: /\.(jpg|png|gif|jpeg|jfif)$/,
                type: 'asset',
                //解析
                parser: {
                    // base64就是一串字符串码表示的图片，在加载页面和js时一块加载出来，减少了加载图片时的http请求。
                    // 加载一张图片时会发起一次http请求，http请求每次建立都会需要一定的时间，
                    // 对于加载一张小图来说，下载图片所需的时间会比建立http请求的时间要短，
                    // 所以对小图进行base64转码是优化http请求，保证页面加速渲染，加快页面加载速度。
                    dataUrlCondition: {
                        maxSize: 8*1024, // 8kb
                    }
                },
                generator: {
                    filename: 'images/[hash][ext][query]', // 打包后会放到images文件夹下  hash缓存
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
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
