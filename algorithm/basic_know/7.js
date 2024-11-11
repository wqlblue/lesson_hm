const len = arr.length;

// 此循环   遍历

// for (let i = 0; i < len; i++) {
//     console.log(arr[i], i);
// }


arr.forEach((item, index) => {
    console.log(item, index);
})


// Array.prototype.forEach 方法和传统的 for 循环在性能上的差异主要源于几个因素。
// 1. 函数调用开销
// forEach 方法内部会为数组中的每个元素调用一次回调函数。每次调用函数都会有一定的开销，
// 包括函数调用的栈管理、参数传递和上下文切换。相比之下，传统的 for 循环不需要这些额外的函数调用开销。

