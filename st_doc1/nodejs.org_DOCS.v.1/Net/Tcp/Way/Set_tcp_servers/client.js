'use strict';
const net = require('net');

const socket = new net.Socket();

net.connect({
    port: 2000,
    host: '127.0.0.1',
}, () => {

    socket.write('Hello from client');
    socket.on('data', data => {
        const message = data.toString();
        console.log('toString:', message);

        // socket.write(user);
    });
});