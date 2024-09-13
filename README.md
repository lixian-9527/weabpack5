# weabpack5
搭建webpack开发环境

如何在本地使用？
1.模块包下载
npm i
2.启动项目
npm run dev
3.打包项目
npm run build

webpack如何打包各种资源以及如何测试？

1.webpack默认处理js/json资源,只需要配置entry和output即可。
测试case:在index.js中console.log输出"HELLO WEBPACK",然后执行npm run build进行打包,然后运行打包后的文件, 打开页面F12能够看见控
制台输出index.js中的'HELLO WEBPACK'等内容，说明js打包成功。

2.webpack不能处理css/img等其他资源，对于CSS，LESS，SASS等资源需要使用不同的loder进行加载。
测试case:在index.html页面中添加<div>块元素,分别设置样式css1-3,打包完成后运行页面能够看到css样式起效，打包成功。
测试case2:使用mini-css-extract-plugin插件能够将css打包成单独的文件,打包后能看见独立的main.css文件，插件配置成功。
测试case3:使用postcss-loader处理兼容性，在style.css中的css1中写入属性backface-visibility，打包后在main.css中这个属性

配置完成后HTML页面中使用的css资源在打包后就会生效，如页面显示。打包单独文件（打包后会生成对立的main.css），处理兼容性（打包后在main.css找到backface-visibility属性会发现已经做了兼容处理），去除css的注释和空格（打包后style.css中的注释已被去掉），去除没有使用的css（打包后的文件没有使用的div4和div5已被去掉）。
3.图片资源的处理，css中的图片资源和html中的图片资源，打包后页面图片正常显示
4.eslint的配置，在v4和v5的区别，代码eslint检查不通过，打包报错
5.devServer开发服务器配置，配置后项目能够在线运行，不需要编译后在打开，将服务hot属性设置为true将开启热模块替换，修改JS,CSS,HTML能够实时更新到页面，注意HTML需要watchFiles处理才能开启HMR
6.ts的文件的处理，配置加载器后，ts文件能够打包的指定的JS文件，正常运行
7.js不同浏览器的兼容处理，处理后在IE中es相关代码能够正常运行
