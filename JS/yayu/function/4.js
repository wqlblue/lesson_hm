function Person(name, age) {
    console.log(this);

    this.name = name;
    this.age = age;
}

// 每个函数都有一个原型对象
Person.prototype = {
    eat: function () {
        console.log(this.name + "在吃饭");
    }
}

const mdh = new Person("马大哈", 20);
mdh.eat();
const ywk = new Person("歪歪", 18);
ywk.eat();
