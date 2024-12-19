function objectFactory() {
    console.log(arguments, arguments.length);
    // const obj = new Object(); // 空对象创建
    const obj = {};
    // arguments 类数组，没有shift，
    // [].shift.call(arguments)
    const Constructor = [].shift.call(arguments);
    console.log(Constructor);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    console.log(obj);
    return obj;
}


function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHello = function () {
    console.log(this.name + 'hello')
}