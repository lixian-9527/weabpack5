require('./style.css');
require('./styleless.less');
require('./stylesass.scss');
require('./hrm-test');

const a = 'HELLO WEBPACK';
// eslint-disable-next-line
console.log(a); // 输出你好 webpack

function add(x, y) {
  return x + y;
}
add(4, 6);

// js的热模块实现
if (module.hot) {
  module.hot.accept('./hrm-test', () => {
    // eslint-disable-next-line
    console.log('hrm-test被修改了但是没有全局刷新');
  });
}
