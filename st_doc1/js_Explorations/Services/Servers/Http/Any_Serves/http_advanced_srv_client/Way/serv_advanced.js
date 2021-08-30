'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const {Readable, Writable, Transform, pipeline} = require('stream');

const wfs = fs.createWriteStream(path.join(__dirname, 'res_body.txt'), 'utf-8');



server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('error', e => {
    if (e.code === 'EACCES') {
        console.log(`No access to port: ${port}`);
    }
    if (e) throw e;
});
