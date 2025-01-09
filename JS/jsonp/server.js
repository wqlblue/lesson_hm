// const http = require('http');

// const server = http.createServer((req, res) => {
//     // 设置 CORS 头
//     res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问资源
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     if (req.method === 'OPTIONS') {
//         res.writeHead(200);
//         res.end();
//         return;
//     }
//     res.end('hello world');


// });

// server.listen(3000, () => {
//     console.log('Server start at 3000');
// });
const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    // 解析URL查询参数
    const url = require('url').parse(req.url, true);
    const callback = url.query.callback;

    // 设置响应头
    res.setHeader('Content-Type', 'application/javascript');

    // 准备要发送的数据
    const data = { name: 'World', age: 18 };

    if (callback) {
        // 如果存在callback参数，则构造JSONP响应
        res.end(`${callback}(${JSON.stringify(data)})`);
    } else {
        // 默认情况下，发送普通JSON响应
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }
});

// 监听3000端口
const port = 3000;
server.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});