const obj = {}

//1. Objcet.defineProperty

// Object.defineProperty(obj, 'name', {
//     value: 'haha',
//     writable: false
// })

// configurable: false 默认为false

// Object.defineProperty(obj, 'name', {
//     get() {
//         return 'haha'
//     }
// })


// 2. proxy


const handler = new Proxy(obj, {
    get(target, key) {
        return 'haha'
    }

})

console.log(handler.name)
obj.name = 'hehe'
console.log(handler.name)
