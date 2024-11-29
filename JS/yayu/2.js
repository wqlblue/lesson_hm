
// function add(a, b) {
//     return a + b;
// }
// 和普通函数的差别
// 构造函数的过程 构造函数 constructor

function Person(name, age) {
    this.name = name;
    this.age = age;

}

const mdh = new Person("马大哈", 20);
console.log(mdh);
const ywk = new Person("歪歪", 18);
console.log(ywk.age, ywk.name);

