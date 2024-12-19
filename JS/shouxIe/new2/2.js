function objectFactory(fn, ...args) {

    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}

//如果构造函数显式返回了一个非 null 的对象，则返回该对象；否则，返回新创建的对象。