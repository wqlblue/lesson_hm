// 1. 扩展运算符
// let obj = {
//     name: '张三',
//     age: 18
// }
// let obj1 = {...obj}
// obj1.name = '王五'
// console.log(obj)
// console.log(obj1)
// 缺点：这个方法只能实现第一层，当有多层的时候还是浅拷贝


// 2. JSON.parse(JSON.stringify())
// let obj = {
//     name: '张三',
//     age: 18,
//     say() {
//         console.log('say hello')
//     }
// }
// let obj1 = JSON.parse(JSON.stringify(obj))
// obj1.name = '王五'
// console.log(obj)
// console.log(obj1)
// 缺点：该方法并不会拷贝内部函数


// 3. 利用递归函数实现
let origin = {
    name: '张三',
    age: 18,
    say() {
        console.log('say hello')
    },
    arr: [[1, 2], 3, 4, 5]
}

function exten(origin, deep) {
    let obj = {}
    if (origin instanceof Array) {
        obj = []
    }
    for (let key in origin) {
        let value = origin[key]
        obj[key] = (!deep && typeof value === 'object' && value !== null) ? exten(value, deep) : value
    }
    return obj
}

const oo = exten(origin, true)
oo.arr[0].push(888)
console.log(origin)
console.log(oo) 