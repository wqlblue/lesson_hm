// 基本数据类型的显示类型转换之Number
// Number

console.log(Number()); //0
//NaN undefined 数值上下文中没有转成一个特定数字的含义
console.log(Number(undefined));
// 0
console.log(Number(null));

console.log(Number(true));
console.log(Number(false));


console.log(Number('123'));
console.log(Number('-123'));

console.log(Number("0x11"));
console.log(Number("100a"));
console.log(Number(""));
console.log(Number(" "));

