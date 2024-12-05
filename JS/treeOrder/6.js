const key = 'abc123'
let points = 50
let winner = false

const person = {
    name: '张三',
    age: 18

}
// 它是一个静态方法  静态方法就是类的方法  不需要实例化就可以调用

// const wes = Object.assign({}, person)
// wes.age = 30
// console.log(wes, person);

// 不可写
const wes = Object.freeze(person)
wes.age = 30
console.log(wes, person);
