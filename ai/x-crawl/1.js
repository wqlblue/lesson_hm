// arguments 是一个特殊的类数组对象
//它存在于每个非箭头函数的函数体内，包含了传递给该函数的所有参数
//它是自动创建的，不需要显式声明。
function sortNumbers() {

    console.log(arguments);

}

sortNumbers(1, 3, 2);