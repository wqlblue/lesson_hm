// const express = require('express');
// const port = 3000;
// const app = express();


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.get('/contact', (req, res) => {
//     res.send('Contact Page');
// });
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

// 设置视图引擎
app.set('view engine', 'ejs');

// 定义一个简单的路由
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome!' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});