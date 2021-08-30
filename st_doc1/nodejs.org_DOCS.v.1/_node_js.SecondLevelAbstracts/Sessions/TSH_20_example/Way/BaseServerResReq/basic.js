const http = require('http');

const hostName = '127.0.0.1';
const servPort = 3004;
const user = {
    name: 'Marcus Aurelius',
    city: 'Rome',
    proffesion: 'emperor',
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-tipe', 'text/plane');
    res.end(`${user.name} said "Java is a crap!" and chiao from ${user.city}`);
});

server.on('error', (e) => {
    if (e.code === 'EACCES') {
        console.log(`No access to port: ${servPort}`);
    } else {
        console.log({e});
    }
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})


server.listen(servPort, hostName,
    () => console.log(`Server running at http://${hostName}:${servPort}/`));


