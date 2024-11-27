const http = require('http');

http.createServer(function (req, res) {
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const cb = query.get('cb');

    if (cb) {
        const data = 'hello world';
        const result = `${cb}("${data}")`;
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(result);
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request: Missing callback parameter');
    }
}).listen(3000);

console.log('Server is running on port 3000');