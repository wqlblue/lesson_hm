const Koa = require('koa');
// 引入的是一个构造函数
const app = new Koa();


const main = (ctx) => {
    // console.log(ctx.req)
    // console.log(ctx.req.url)
    // console.log(ctx.request.url)
    console.log(ctx.url)
    // ctx.res.end('hello world')
    // ctx.response.end('hello world')    //response 里面没有放send()    
    // ctx.response.body = 'hello world'   //body 是属性
    ctx.body = 'hello world';
}
app.use(main);



app.listen(3000, () => {
    console.log('server is running')
})