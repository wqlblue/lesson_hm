//打造一个可以链接数据库的方法
const mysql = require('mysql2/promise');
const { database } = require('../config/index.js');

//创建连接池
const pool = mysql.createPool(database);

//可以连接数据库的方法
const allServer = {
    async query(sql) {
        try {
            //通过连接池来创建连接
            const conn = await pool.getConnection();
            //对该连接执行某些操作
            const [rows, err] = await conn.query(sql);
            //操作完成后，释放连接
            pool.releaseConnection(conn);
            return Promise.resolve(rows);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

//登录接口
const userLogin = (username, password) => {
    const _sql = `select * from users where username='${username}' and password='${password}'`;
    return allServer.query(_sql)
}

//查找账号是否存在
const userFind = (username) => {
    const _sql = `select * from users where username='${username}'`;
    return allServer.query(_sql)
}

//注册
const userRegister = (values) => {
    const _sql = `insert into users(username,password,nickname) values('${values.username}','${values.password}','${values.nickname}')`;
    return allServer.query(_sql)
}

//根据分类查找数据
const findNoteListType=(note_type,id)=>{
    const _sql = `select * from note where note_type='${note_type}'and userId='${id}'`;
    return allServer.query(_sql)
}

//根据id查找笔记
const findNoteDetail=(id)=>{
    const _sql = `select * from note where id='${id}'`;
    return allServer.query(_sql)
}

const publishNote=(noteInfo) => {
    const { title, note_content, head_img, note_type, userId, nickname, c_time, m_time } = noteInfo;
    const _sql = `insert into note (title,note_content,head_img,note_type,userId,nickname,c_time,m_time) values ("${title}","${note_content}","${head_img}","${note_type}","${userId}","${nickname}","${c_time}","${m_time}");`;
    return allServer.query(_sql);
}

module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListType,
    findNoteDetail,
    publishNote
};