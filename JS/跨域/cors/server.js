const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "access-control-allow-origin": "*"
    })
    res.end('Hello World!');
}).listen(3000)