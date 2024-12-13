function Person(name, age) {
    Person.prototype.sayName = function () {
        return this.name;
    }
}

//  new 实例化运算符
// 1. 创建一个空对象 {} 和Person没有血缘关系
// {}_proto_ Object.prototype
// 2. 这个空对象的__proto__属性被赋值为该构造函数的prototype属性
// 3. 构造函数内部的this被赋值为这个新对象（即this指向新对象）。
// 4. 通过new创建的每个对象将最终被 [[ 原型 ]] 连接到这个函数的 prototype 对象上。
// 5. 如果函数没有返回对象类型 Object(包含 Function, Array, Date, RegExg, Error)，那么 new 表达式中的函数调用会自动返回这个新对象。


