'use strict';
const net = require('net');

const data = {a: 'aa'};

const server = net.createServer(socket => {
    console.log('Connected:', socket.localAddress);
    console.log(socket);
    socket.write('SerVer');
    socket.on('data', data => {
        console.log('toString:', data.toString());
    });

});
server.listen(2000, () => console.log('Start server at' +
    ' 2000'));