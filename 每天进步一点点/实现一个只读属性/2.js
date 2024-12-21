
"use strict";
let obj = {}

Object.defineProperty(obj, 'name', {
    value: 'haha',
    writable: false
})
console.log(obj.name)
obj.name = 'hehe'
console.log(obj.name)
