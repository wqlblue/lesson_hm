const jwt = require('jsonwebtoken')


function sign(option) {
    return jwt.sign(option, '666', {
        expiresIn: '1h',
        algorithm: 'HS256'
    })  // 加密
}

module.exports = {
    sign
}
