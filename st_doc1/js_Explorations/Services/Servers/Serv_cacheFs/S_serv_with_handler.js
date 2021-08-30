'use strict';

const http = require('http');
const mod_path = require('path');

const hand = require(mod_path.join(__dirname, 'H_handlerServ_with_cache.js'));


function serv_casheFs_1(cashe) {
    const port = 3005;
    const host = '127.0.0.1';


    const server = http.createServer((req, res) =>
        hand(req, res, cashe))
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

}

module.exports = serv_casheFs_1;
