// 代码可读性  >  
function generateRandomSex() {
    // if (Math.random() < 0.5) {
    //     return '男'
    // } else {
    //     return '女'
    // }
    const genders = ['男', '女']
    return genders[Math.floor(Math.random() * genders.length)]
}