// 打造一个可以连接数据库的方法
const mysql = require('mysql2/promise');
const { database } = require('../config/index.js')

// 首先创建连接池
const pool = mysql.createPool(database);


// 可以连接数据库的方法
const allService = {
    async query(sql) {

        try {
            //通过连接池来创建连接
            const conn = await pool.getConnection()
            // 对该连接执行某些操作
            const [rows, err] = await conn.query(sql)
            // 关闭连接
            pool.releaseConnection(conn)
            // 若没有出错，返回查询结果
            return Promise.resolve(rows)
        } catch (error) {
            return Promise.reject(error)
        }

    }
}

const userLogin = (username,password) =>{
    console.log('正在查询数据库中的用户信息');
    const _sql = `select * from users where username='${username}' and password='${password}'`
    return allService.query(_sql) 
}
const userFind = (username) =>{
    const _sql = `select * from users where username='${username}'`
    return allService.query(_sql)
}
const userRegister = (values)=>{
    const _sql = `insert into users (username, password,nickname) values ("${values.username}", "${values.password}", "${values.nickname}")`
    return allService.query(_sql)
}
// 根据分类查找数据
const findNoteListByType = (note_type,id)=>{
    console.log('从数据库中查找分类数据');
    const _sql = `select * from note where note_type='${note_type}' and userId='${id}'`
    return allService.query(_sql)
}
// 根据id查找笔记详情
const getNoteDetail = (id)=>{
    console.log('从数据库中查找笔记详情');
    const _sql = `select * from note where id='${id}'`
    return allService.query(_sql)
}
//发布笔记
const notePublish = (values) => {
    const _sql = `insert into note (
        title,
        note_content,
        head_img,
        note_type,
        nickname,
        c_time,
        m_time,
        userId) values (
        "${values.title}",
        "${values.note_content}",
        "${values.head_img}",
        "${values.note_type}",
        "${values.nickname}",
        "${values.c_time}",
        "${values.m_time}",
        "${values.userId}"
        )`
    return allService.query(_sql)
}
module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    getNoteDetail,
    notePublish
 
}
 
