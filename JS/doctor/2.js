// 循环
//在JavaScript中，string 确实被视为一种原始数据类型（primitive type），
//但为了方便操作字符串，JavaScript 提供了一些内置的方法。 

//字符串的装箱机制
// 当你对一个字符串调用方法时，JavaScript 会执行以下步骤：

// 创建临时对象：JavaScript 会创建一个 String 对象，这个对象封装了原始的字符串值。
// 调用方法：在临时对象上调用相应的方法。
// 销毁临时对象：方法调用完成后，临时对象被销毁，只保留原始的字符串值。
function getphonenumber(numbers) {
    let format = "(xxx) xxx-xxxx"
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i])
    }

    return format
}

console.log(getphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

