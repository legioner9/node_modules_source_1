'use strict';

const http = require('http');

const server = http.createServer((req, res) =>
                                     hand(req, res, cache))
    .listen(port, host, () => {
        console.log(`Server start at http://${host}:${port}`)
    });

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('error', err => {
    if (err.code === 'EACCES') {
        console.log(`No access to port: ${port}`);
    }
    if (err) throw err;
});