//  编写一个函数     [1,2,3,4,5,6,7,8,9,0]

// return "(123) 456-7890";






function fn(a) {
    console.log(a);
    var a = 123;
    console.log(a);

    function a() { }
    console.log(a);

    var b = function () { };
    console.log(b);

    function d() { }
    var d = a;
    console.log(d);
}




//  循环
// function getphonenumber(numbers) {
//     let format = "(xxx) xxx-xxxx"
//     for (let i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i])
//     }

//     return format
// }

// console.log(getphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


//  正则表达式
// function getphonenumber(numbers) {

//     numbers = numbers.join('')
//     return numbers.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2-$3")


// }

// console.log(getphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))