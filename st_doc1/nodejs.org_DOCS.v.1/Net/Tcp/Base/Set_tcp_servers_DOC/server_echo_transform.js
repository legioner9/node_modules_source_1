const net = require('net');
const UC = require( './my_transform_classes').ToUpperCaseTransformStream;
const uc = new UC;
const server = net.createServer((c) => {
    // 'connection' listener
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
    c.pipe(uc).pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(2000, () => {
    console.log('server bound');
});