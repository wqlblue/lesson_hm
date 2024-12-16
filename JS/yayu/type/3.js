console.log(1 / +0); // Infinity
console.log(1 / -0);  // -Infinity

console.log(Object.is(+0, -0));
console.log(Object.is(5, 5));
console.log(Object.is(NaN, NaN)); //不代表确切值

// 隐式类型转换
// NaN Not a Number -> 数字类型
console.log(2 * "a", 2 + "a");
console.log(typeof NaN);


console.log(parseInt("a"));
console.log(parseInt("123a")); //遇到a 就停止解析了
console.log(parseInt("0x123abc"));


console.log(isNaN(NaN), isNaN(parseInt("a")));
