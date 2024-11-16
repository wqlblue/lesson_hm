const Koa = require('koa');
// 引入的是一个构造函数
const app = new Koa();
const fs = require('fs');

const main = (ctx) => {
    if (ctx.url === '/') {
        ctx.body = '首页'
    } else if (ctx.url === '/list') {
        ctx.body = '列表页'
    }
    else if (ctx.url === '/about') {
        // const content = fs.readFileSync('./about.html') 
        // ctx.body = content.toString()

        const content = fs.createReadStream('./about.html') // 
        ctx.body = content

    }
}
app.use(main);



app.listen(3000, () => {
    console.log('server is running')
})