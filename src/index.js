import { a as c, b, add as tsAdd } from './typeScript.ts';

require('./style.css');
require('./styleless.less');
require('./stylesass.scss');
require('./hrm-test');

// eslint-disable-next-line
console.log(tsAdd(c, b));

const a = 'HELLO WEBPACK';
// eslint-disable-next-line
console.log(a); // 输出你好 webpack
// eslint-disable-next-line
console.log(a); // 输出你好 webpack

function add(x, y) {
  return x + y;
}
add(4, 6);

// eslint-disable-next-line
// js的热模块实现
// if (module.hot) {
//   module.hot.accept('./hrm-test', () => {
//     // eslint-disable-next-line
//     console.log('hrm-test被修改了但是没有全局刷新');
//   });
// }
