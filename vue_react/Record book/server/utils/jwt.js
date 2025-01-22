const jwt = require('jsonwebtoken');

function sign(option){
   return jwt.sign(option,'hello',{expiresIn:86400});//加盐
}

function verify(token){
    return async (ctx,next)=>{
        const jwtToken=ctx.req.headers.authorization;
        // console.log(jwtToken);
        if(jwtToken){
            try{
                const decoded=jwt.verify(jwtToken,'hello');
            // console.log(decoded);
            if(decoded.id){ //合法
                ctx.userId=decoded.id;
                ctx.nickName=decoded.nickname;
                await next();
            }
            }catch(error){
                ctx.body={
                    code:'809',
                    data:'error',
                    msg:"token无效"
                }
            }
            
        }else{
            ctx.body={
                code:'808',
                msg:"token不存在"
            }
        }

    }
}

module.exports = {
    sign,
    verify
};

