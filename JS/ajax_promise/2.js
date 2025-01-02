// 实例化 传递函数



const p = new Promise((resolve, reject) => { // executor 执行器

    console.log('3333') // 同步任务
    setTimeout(() => {  // 异步任务 event loop 
        console.log('2222')
        resolve()
    }, 1000)


})
// 异步任务的执行顺序控制的话，用promise
console.log(p.__proto__, p);
p.then(() => {
    console.log('1111')
    console.log(p)
})
    .catch(() => {
        console.log('error')
    })

