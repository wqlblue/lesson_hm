function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}



function mynew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);

    const result = constructor.apply(obj, args);

    return (result && typeof result === 'Object' && result != null) ? result : obj;
}

// function mynew() {
//     const obj = new Object();
//     const Constructor = [].shift.call(arguments);
//     Constructor.apply(obj, arguments);
//     return obj;

// }



// arguments 的行为：arguments 是一个类数组对象，它并不是真正的数组。当你使用 Array.prototype.shift.call(arguments) 时
// ，虽然它确实会移除并返回 arguments 的第一个元素，但它并不会改变 arguments 的长度属性或影响后续的 arguments 访问。
// 也就是说，arguments 仍然包含所有的原始参数，只是第一个参数被移除了。
// apply 方法的参数传递：Constructor.apply(obj, arguments) 会将 arguments 作为参数列表传递给构造函数。
// 即使你已经使用 shift 移除了构造函数，arguments 仍然包含了所有原始参数，包括已经被移除的第一个参数的位置（尽管它的值已经被移除）。
// 这可能会导致构造函数接收到错误的参数列表