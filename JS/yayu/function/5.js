function Person(name, age) {
    console.log(this);

    this.name = name;
    this.age = age;
}

const kobe = {
    name: "科比",
    playBasketball: function () {
        console.log(this.name + "在打篮球");
    }
}
Person.prototype = kobe;
const mdh = new Person("马大哈", 20);
mdh.playBasketball();