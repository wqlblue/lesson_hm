# 展开运算符
- 各种解法
  还有码？

- 语言特性
    展开运算符 优雅  简洁


- 各种将字符串转字符数组的方法
  1. split
  2. 解构赋值
  3. 扩展运算符
  4. Array.from



类数组  

querrySelectorAll  是一个类数组 Nodelist
getElementBytagName  也是一个类数组 HTMLCollection

为什么 他们的原型链里没有Array，但是可以用 foreach ?
在现代浏览器中，HTMLCollection 和 NodeList 已经被扩展，支持了 forEach 方法，但这并不是所有浏览器都支持的行为。

- NodeList 类 ，构造函数 prototype 对象
有 length属性 ， 及 foreach 等少数数组行为的对象称之为 类数组对象
