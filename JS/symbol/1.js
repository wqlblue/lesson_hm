const obj = {
    [Symbol('id')]: 123,
    name: 'Alice'
};

console.log(Object.getOwnPropertyDescriptors(obj));