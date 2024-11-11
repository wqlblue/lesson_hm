function traverse(arr) {
    const outlen = arr.length
    for (let i = 0; i < outlen; i++) {
        console.log(arr[i])
    }
}
// 空间复杂度 O(1)
// arr是传入的参数，outlen是局部变量，占用的空间是常量，所以空间复杂度是O(1)