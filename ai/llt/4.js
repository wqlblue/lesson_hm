function generateRandomTime() {
    const date = new Date()
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    date.setSeconds(Math.floor(Math.random() * 60));
    return date.toISOString() // toISOString() 方法返回一个符合 ISO 8601 标准的字符串
}
console.log(generateRandomTime());
