// //es5
// var a = "1";  //String 值决定
// a = Number(a);
// a = true
console.log(Boolean({}));

console.log(0n == false);
console.log(Boolean());  //如果你不传递任何参数给 Boolean()，那么它实际上接收到的是 undefined.
console.log(Boolean(undefined));
console.log(Boolean(+0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));
console.log(Boolean(""));




