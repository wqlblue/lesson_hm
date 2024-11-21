let a = null;     //栈内存
console.log(typeof (a));

let largeObject = {    //堆内存
    data: new Array(1000000).fill('a'),
}

largeObject = null;


console.log(largeObject);