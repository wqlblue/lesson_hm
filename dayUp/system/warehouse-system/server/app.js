const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();

// 数据库配置
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'warehouse',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 中间件
app.use(cors());
app.use(bodyParser());

// JWT 密钥
const JWT_SECRET = 'your_jwt_secret';

// 登录接口
router.post('/login', async (ctx) => {
    const { username, password } = ctx.request.body;
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (rows.length > 0) {
        const token = jwt.sign({ id: rows[0].id, role: rows[0].role }, JWT_SECRET, { expiresIn: '1h' });
        ctx.body = { token, role: rows[0].role };
    } else {
        ctx.status = 401;
        ctx.body = { error: '用户名或密码错误' };
    }
});

// 商品列表
router.get('/products', async (ctx) => {
    const [rows] = await pool.query('SELECT * FROM products');
    ctx.body = rows;
});

// 新增商品
router.post('/products', async (ctx) => {
    const { name, price } = ctx.request.body;
    const [result] = await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
    ctx.status = 201;
    ctx.body = { id: result.insertId };
});

// 进货
router.post('/purchases', async (ctx) => {
    const { productId, quantity } = ctx.request.body;
    await pool.query('START TRANSACTION');
    try {
        await pool.query('UPDATE products SET stock = stock + ? WHERE id = ?', [quantity, productId]);
        await pool.query('INSERT INTO purchases (product_id, quantity) VALUES (?, ?)', [productId, quantity]);
        await pool.query('COMMIT');
        ctx.status = 201;
        ctx.body = { message: '进货成功' };
    } catch (error) {
        await pool.query('ROLLBACK');
        ctx.status = 500;
        ctx.body = { error: '进货失败' };
    }
});

// 销售
router.post('/sales', async (ctx) => {
    const { productId, quantity } = ctx.request.body;
    await pool.query('START TRANSACTION');
    try {
        await pool.query('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, productId]);
        await pool.query('INSERT INTO sales (product_id, quantity) VALUES (?, ?)', [productId, quantity]);
        await pool.query('COMMIT');
        ctx.status = 201;
        ctx.body = { message: '销售成功' };
    } catch (error) {
        await pool.query('ROLLBACK');
        ctx.status = 500;
        ctx.body = { error: '销售失败' };
    }
});

app.use(router.routes());
app.listen(3000, () => {
    console.log('Server running on port 3000');
});