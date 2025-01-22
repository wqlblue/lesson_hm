const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteDetail } = require('../controllers/index.js');
const { decode } = require('jsonwebtoken');


router.get('/findNoteDetail', jwt.verify(), async (ctx) => {
    //检验token是否合理，再去数据库中查找数据返回给前端
    try {
        const { note_id } = ctx.request.query;
        // console.log(note_id);
        const res = await findNoteDetail(note_id);
        // console.log(res);
        if(res.length === 0){
            ctx.body = {
                code: '400',
                msg: '未找到该笔记'
            }
        }else{
            ctx.body = {
                code: '800',
                data: res,
                msg: '查询成功'
            }
        }
    }catch(err){
        ctx.body = {
            code: '805',
            msg: '服务器异常'
        }
    }
});


module.exports = router;