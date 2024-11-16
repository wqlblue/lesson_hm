const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>welcome to the homepage</h1>')
    }
    else {
        res.end('hello world')
    }
})
server.listen(3000, () => {
    console.log('server is running')
})