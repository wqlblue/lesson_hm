const webSocket = require('ws');

const ws = new webSocket.Server({
    port: 3000
});
let count = 1
ws.on('connection', (obj) => {
    obj.on('message', (data) => {
        setInterval(() => {
            count++
            obj.send(count)
        })
        obj.send('this is a message from webSocket')
    })
})