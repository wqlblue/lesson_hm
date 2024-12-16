var a = 1.234;
console.log(typeof a, a.toFixed(2));
var b = new Number(a);  //new Number(a) 返回的是一个 Number 对象，而不是一个数字。
// valueof()
console.log(typeof b);
console.log(b.toFixed(2));
