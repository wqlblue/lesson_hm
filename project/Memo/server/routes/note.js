const router = require('@koa/router')()
const jwt = require('../utils/jwt.js')
const { findNoteListByType,getNoteDetail,notePublish } = require('../controllers/index.js')
const {formateTime} = require('../utils/format.js')

router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
    // 检验token合理再去数据库中查找数据
    const { note_type } = ctx.request.query
    // console.log(note_type,ctx.request.header.username);
    // 传入笔记类型和用户名称  
    console.log(note_type, ctx.userId);
    try {
        const res = await findNoteListByType(note_type, ctx.userId)
        if (res.length) {
            ctx.body = {
                code: '800',
                msg: '查询成功',
                data: res
            }
        } else {
            ctx.body = {
                code: '800',
                msg: '当前分类下没有数据',
                data: res
            }
        }
    } catch (error) {
        ctx.body = {
            code: '805',
            data: error,
            msg: '服务器异常'
        }
    }
})

// 获取笔记详情
router.get('/getNoteDetail',jwt.verify(),async (ctx)=>{
    const { id } = ctx.request.query
    const res = await getNoteDetail(id)
    try {
        if(res.length){
            ctx.body = {
                code: '800',
                data:res,
                msg:'查询成功'
            }
        }else{
            ctx.body = {
                code: '801',
                msg:'查询失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '802',
            msg:'服务器异常',
            data: error
        }
    }
})

router.post('/note-publish',jwt.verify(),async (ctx) => {
    //检验Token合理，再去数据库中查找数据，返回给前端
    const { title,note_content,head_img,note_type } = ctx.request.body
    const nickname = ctx.nickname
    const userId = ctx.userId
    const c_time = formateTime(new Date())
    const m_time = formateTime(new Date())
   try{
    // 往数据库写入
    const res = await notePublish({
        title,
        note_content,
        head_img,
        note_type,
        nickname,
        c_time,
        m_time,
        userId
})
    // console.log(res)
    ctx.body = {
        code:'800',
        data:res,
        msg:'note写入成功'
    }
   }catch(error){
    ctx.body = {
        code:'805',
        data:error,
        msg:'服务器异常'
    }
   }       
})  
module.exports = router