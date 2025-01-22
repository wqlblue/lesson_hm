const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteListType } = require('../controllers/index.js');
const {formateTime}=require('../utils/formateTime.js')
const { publishNote } = require('../controllers/index.js');


router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
    //检验token是否合理，再去数据库中查找数据返回给前端
    try {
        const { note_type } = ctx.request.query;
        const res = await findNoteListType(note_type, ctx.userId);
        if (res.length) {
            ctx.body = {
                code: '800',
                data: res,
                msg: '查询成功'
            }
        } else {
            ctx.body = {
                code: '801',
                msg: '内容为空',
                data: "error"
            }
        }
    } catch (err) {
        ctx.body = {
            code: '805',
            data: err,
            msg: "服务器异常"
        }
    }
});

router.post('/note-publish', jwt.verify(), async (ctx) => {
    const { title, note_content, head_img, note_type } = ctx.request.body;
    // console.log(title, note_content, head_img, note_type);
    const c_time=formateTime(new Date());
    const m_time=formateTime(new Date());
    // console.log(c_time,m_time);
    try{
        
        const res = await publishNote({
            title, 
            note_content,
            head_img,
            note_type,
            c_time,
            m_time,
            userId: ctx.userId, 
            nickname: ctx.nickName
        });
    // console.log(res);
    if (res.affectedRows) {
        ctx.body = {
            code: '800',
            msg: '发布成功',
            data: 'success'
        }
    } else {
        ctx.body = {
            code: '804',
            msg: '发布失败',
            data: 'fail'
        }
    }
    }catch(err){
        ctx.body = {
            code: '805',
            msg: '服务器异常',
            data: 'error'
        }
    }
    

})

module.exports = router;