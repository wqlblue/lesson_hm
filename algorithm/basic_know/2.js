function traverse(arr) {
    const outlen = arr.length  //1
    for (let i = 0; i < outlen; i++) {  //1 + n+1 + n
        const inlen = arr[i].length //n
        for (let j = 0; j < inlen; j++) {  //n + n(n+1) + n*n
            console.log(arr[i][j]) //n*n
        }
    }
}

// T(n) =1 +1 + n+1 + n +n + n + n(n+1) + n*n = 3n^2 + 5n + 3
// O(n^2)  把握主要矛盾 ，忽略次要，系数不重要
//  随着输入规模的增大，算法对应的执行总次数是一个变化趋势