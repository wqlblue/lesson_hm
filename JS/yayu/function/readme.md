# 走进js,走进冴羽

- 造对象
  -对象字面量
    简单、直接，但随意且不灵活
- es6 class
  批量造  ？ class Person
  new
- 类是抽象概念 封装（属性和方法），是模板
- 传统面向对象开发JS,es5不支持class

- 构造函数
    - js 面向对象的任务函数担起来了
    - 构造函数 首字母大写 ,区分普通函数
    - this 指针  指向 实例对象 
      完成构造(实例化)的过程  
     new 运算符  Person()  

- 函数是不是构造函数,不是由大写决定的
    而是由调用方式决定的
    - 构造函数首字母大写是编程风格的约定

- js 构造函数可以独立完成实例化
- 原型
    Person.prototype.eat

- 类的方法部分由原型(prototype)属性完成
- 函数是对象 , 函数对象都有一个 prototype 属性

- js es5 类的构建 = 构造函数(属性,对象的    ) + 原型(方法,所有实例共享的  性能+ 没有必要归对象,this可以找到对象)

- js 面向对象是原型的面向对象 (设计哲学) ,就好像中国人以孔子为原型,不是血缘关系
    Person.prototype

    对象可以共享原型对象上的方法