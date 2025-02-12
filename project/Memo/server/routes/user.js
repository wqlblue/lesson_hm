const router = require('@koa/router')();
const { userLogin,userFind,userRegister } = require('../controllers/index.js')
router.prefix('/user')

const jwt = require('../utils/jwt.js')
//登录
router.post('/login', async (ctx) => {
    // 从请求体中解析到前端传递的参数，去数据库查询账号密码是否存在  返回正确或错误
    const { username, password } = ctx.request.body
    console.log(username, password);
    try {
        const result = await userLogin(username, password)
        console.log(result);
        
        if (result.length) {        //找到了账号,data为人物信息
            const data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            const token = jwt.sign(data)
            ctx.body = {
                code: '800',
                msg: '登陆成功',
                data,
                token:token
            }
        } else {
            ctx.body = {
                code: '801',
                msg: '账号或密码不正确'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '805',
            data: error,
            msg: '服务器内部错误'
        }
    }

})


// 后端的注册
router.post('/register',async (ctx)=>{
    const { username,password,nickname } = ctx.request.body


    try {
        if(!username || !password || !nickname){
            ctx.body = {
                code: '801',
                msg: '账号密码或昵称不能为空'
            }
            return
        }
        // 判断账号是否存在
        const findRes = await userFind(username)
        if(findRes.length){
            ctx.body = {
                code: '802',
                data:'error',
                msg: '该账号已存在'
            }
            return
        }
        // 往数据库中写入
        const res = await userRegister({username,password,nickname})
        if(res.affectedRows === 1){
            ctx.body = {
                code: '800',
                data:'success',
                msg: '注册成功'
            }
        }else{
            ctx.body = {
                code: '803',
                data:'fail',
                msg: '注册失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '804',
            data: error,
            msg: '服务器内部错误'
        }
    }
    
    
})
module.exports = router


