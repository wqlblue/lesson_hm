function greeting(name) {
    return `hello ,${name}`;
}

greeting.language = "english";
greeting.spanish = function (name) {
    return `hola,${name}`;
}
console.log(greeting("weio"));


function invokeGreeting(greetingFunction, name) {
    return greetingFunction(name);
}
console.log(invokeGreeting(greeting, "weio")); // 函数作为参数传递  
