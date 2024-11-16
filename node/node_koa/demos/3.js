const Koa = require('koa');
// 引入的是一个构造函数
const app = new Koa();
const router = require('koa-route');

const logger = () => {
    console.log(`${ctx.url}--${ctx.method}--${new Date()}`);

}

const home = (ctx) => {
    ctx.body = '我是首页';
}
const about = (ctx) => {
    ctx.body = '<a href="/home" > 去首页</a>'
}
// app.use(main);

app.use(logger)    // 中间件
app.use(router.get('/home', home))
app.use(router.get('/about', about))


app.listen(3000, () => {
    console.log('server is running')
})