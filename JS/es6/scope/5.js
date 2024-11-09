// RHS查找失败的时候 ，会爆出 ReferenceError 错误
// 但是如果是LHS查找失败， 会在全局作用域中创建一个具有该名称的变量， 并返回这个变量的引用。
function foo() {
    b = 2
}
foo()
console.log(b)