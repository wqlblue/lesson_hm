# symbol
- 唯一值
    - 用Symbol函数声明
    - 给一个label 可选
    - 返回唯一值
    - 常用于对象字面量 不会,不用担心 会被覆盖
      key的用法 这也是Symbol需要的原因
      大厂大型项目 ,对象复杂 难维护,多人协作

- Object.keys() 对象的键名属性,但是不包括symbol类型的键名
- Object.values() 对象的键值属性,但是不包括symbol类型的键值
- Object.entries() 对象的键值对属性,但是不包括symbol类型的键值对

- 可迭代对象
  Object.getOwnpropertyDescriptors(classMates)  可以查看对象的所有属性 和属性描述符
  -   
  - 因为Symbols 独特设计,就是提供唯一值的，只是通过 getOwnpropertyDescriptors来获取

- ownProperty 

- 为什么   [Symbol("olivia")]: { grade: 50, gender: "female" } 里面不能没有 []?
    你首先需要了解 静态属性名和动态属性名,静态属性名

    静态属性名:指那些在编写代码时就已经明确指定的属性名
    动态属性名:动态属性名 是指在运行时通过变量、表达式或其他计算结果来确定的对象属性名

    方括号 [] 语法允许你使用任何表达式作为属性名，包括变量、函数调用等，适用于动态属性名和非标识符属性。而点符号 . 只能用于访问以标识符或字符串字面量作为键的属性，适用于静态属性名。


- symbol()和 Symbol.for(key) 的区别是什么?
  Symbol() 和 Symbol.for(key) 都是用于创建符号的工具，但它们的行为和适用场景有所不同。Symbol() 生成的是局部的、唯一的符号，而  Symbol.for(key) 则是全局共享的符号。根据你的需求选择合适的工具，可以确保代码的健壮性和可维护性。