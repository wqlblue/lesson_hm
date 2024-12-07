// 函数的length属性，不包括 rest 参数。
console.log((function (a, b) { }).length);
console.log((function (a, ...b) { }).length);

// 报错
// rest参数之后不能有其他参数
// function f(a, ...b, c) {
//     // ...
// }


