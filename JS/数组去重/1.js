
let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 2 } }
]
console.log(arr);

let arr2 = arr.map((item) => {
    return JSON.stringify(item)
})
console.log(arr2);
let newArr = new Set(arr2)
newArr = Array.from(newArr).map((item) => {
    return JSON.parse(item)
})

console.log(newArr);

