const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const useRouter = require('./routes/index.js')
const { bodyParser } = require('@koa/bodyparser')

//允许跨域
app.use(cors())
app.use(bodyParser()) //让koa可以解析post传递的参数
//生效路由
useRouter(app)


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})