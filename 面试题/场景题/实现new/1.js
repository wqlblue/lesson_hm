function mynew(constructor, ...args) {
    let obj = Object.create(constructor.prototype)

    let result = constructor.apply(obj, args)

    return (typeof result === 'object' && result !== null ? result : obj)
}