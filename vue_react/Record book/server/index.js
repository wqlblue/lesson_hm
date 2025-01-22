const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors')
const { bodyParser } = require('@koa/bodyparser');
const useRouter=require('./routes/index')

app.use(cors());//允许跨域
app.use(bodyParser());//让koa可以解析post请求的参数
useRouter(app)

app.listen(3000, () => {
    console.log('项目已启动');
})

