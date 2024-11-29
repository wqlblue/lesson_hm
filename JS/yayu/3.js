function Person(name, age) {
    console.log(this);

    this.name = name;
    this.age = age;
}
Person('我去了', 19)  //普通函数执行  this指向window

const mdh = new Person("马大哈", 20); //构造函数执行  this指向实例对象