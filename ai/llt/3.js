// 生成一个18岁到55岁之间的随机年龄

function generateRandomAge() {
    const minAge = 18
    const maxAge = 55
    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge
}