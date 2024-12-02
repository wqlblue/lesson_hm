// 入口文件
// console.log('---')
// es6 module dom 相关
import React from 'react';
import ReactDOM from 'react-dom/client';
// root 内部就是react 的世界
// root react 根节点  
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const element = React.createElement('h1', { id: 'name' }, '我是react 元素')
console.log(element);

root.render(element)
// react 法宝  JSX语法
//  不是纯js ， react  jsx语法

const element2 = <h1>我是react元素</h1>
console.log(element2);

root.render(element2)
