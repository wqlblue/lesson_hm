//代码的执行次数

function solution(n) {
    var len = arr.length;  // 1

    for (let i = 1; i <= len; i++) {  // 1 +  n+1 +  n                       
        console.log(arr[i]);      // n
    }
}
// T(n)=1 +1 +n+1 + n +n = 3n+3
// 代码执行次数 T(n)
solution()