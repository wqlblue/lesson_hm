function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function mynew() {
    const obj = new Object();
    const Constructor = [].shift.call(arguments);
    Constructor.apply(obj, arguments);
    return obj;

}