const Router = require('@koa/router');
const router = new Router();
const { userLogin, userFind, userRegister } = require('../controllers/index.js');
const jwt = require('../utils/jwt.js')
router.prefix('/user')
//登录
router.post('/login', async (ctx) => {
    //从请求体解析到前端传递的参数，去数据库查询账号密码是否合法
    //console.log(ctx.request.body);
    try {
        const { username, password } = ctx.request.body;
        const result = await userLogin(username, password);
        if (result.length) {//登陆成功
            const data = {
                id: result[0].id,
                username: result[0].username,
                nickname: result[0].nickname
            },
                token = jwt.sign(data)
            ctx.body = {
                code: '800',
                data,
                msg: '登录成功',
                token
            }
        } else {
            ctx.body = {
                code: '8004',
                msg: '用户名或密码错误',
                data: 'error'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            msg: '服务器错误',
            data: 'error'
        }
    }

})

//注册
router.post('/register', async (ctx) => {
    const { username, password, nickname } = ctx.request.body;
    if (!username || !password || !nickname) {
        ctx.body = {
            code: '801',
            msg: '账号、密码或昵称不能为空'
        }
        return;
    }
    try {
        //判断账号是否存在
        const findRes = await userFind(username)
        if (findRes.length) {
            ctx.body = {
                code: '802',
                msg: '该账号已存在',
                data: 'error'
            }
            return;
        }
        //写入数据库
        const res = await userRegister({ username, password, nickname });
        console.log(res);
        if (res.affectedRows) {
            ctx.body = {
                code: '800',
                msg: '注册成功',
                data: 'success'
            }
        } else {
            ctx.body = {
                code: '803',
                msg: '注册失败',
                data: 'error'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '804',
            msg: '服务器异常',
            data: 'error'
        }
    }



})


module.exports = router

