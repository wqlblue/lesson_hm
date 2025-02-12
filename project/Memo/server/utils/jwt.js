const jwt = require('jsonwebtoken');

function sign(option) {
    return jwt.sign(option, '11',{
        expiresIn: 86400  //token过期时间 一天
    })     //加盐
}
// 验证token是否合法
function verify() {
    return async(ctx, next) => {
        try {
            const jwtToken = ctx.req.headers.authorization
            if (jwtToken) {        
                console.log('有token')
                const decoded = jwt.verify(jwtToken,'11')    
                if(decoded.id){
                    console.log('token合法');
                    ctx.userId = decoded.id
                    await next()
                }
                   
                
            }else{

            }
        } catch (error) {
            ctx.body = {
                code:809,
                msg:'Token失效或note中错误'
            }
            console.log(error);
            
        }


    }
}

module.exports = {
    sign,
    verify
}