// js 造人
//对象字面量

let wql = {
    name: "万齐磊",
}
let hx = {
    name: "黄鑫",
    age: 20,
}

//class es6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + "在吃饭");

    }
    sleep() {
        console.log(this.name + "在睡觉");
    }
}
let mdh = new Person("马大哈", 20);
let ywk = new Person("歪歪", 18);
