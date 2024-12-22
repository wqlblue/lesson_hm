// 可以完成对象的基本操作



// Reflect: 可以完成对象的基本操作

const obj = {
    a: 1,
    b: 2,
    get c() {
        console.log(this);
        return this.a + this.b
    }
};
console.log(Reflect.get(obj, 'c', { a: 3, b: 5 }));
console.log(obj.c);  // [[Get]](对象，哪个属性，this是谁)











// const obj = { a: 1, b: 2 };


// Object.defineProperty(obj, 'a', {
//     value: 1,
//     enumerable: false
// })


// // const keys = Object.keys(obj)
// const keys = Reflect.ownKeys(obj)
// console.log(keys);



// 有多种方式操作对象
// obj.a = 1; // [[SET]]
// obj.a = 3;
// delete obj.a; // [[DELETE]]
// Object.setPrototypeOf(obj, { a: 1 }); // [[SetPrototypeOf]]
// Object.getPrototypeOf(obj); //[[GetPrototypeOf]]