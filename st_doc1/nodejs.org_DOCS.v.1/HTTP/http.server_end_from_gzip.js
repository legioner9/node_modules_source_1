const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const {Readable, Writable, Transform, pipeline} = require('stream');
const path = require('path');
const port = 3003;

const rs = fs.createReadStream(path.join(__dirname, 'Src', 'page_first.html'));
const gs = zlib.createGzip();

const server = http.createServer((req, res) => {
    console.log({req, res});
    res.writeHead(200, { 'Content-Encoding': 'gzip' });
    pipeline(
        rs,
        gs,
        res,
        (err) => {
            if (err) {
                console.error('Pipeline failed.', err);
            } else {
                console.log('Pipeline succeeded.');
            }
        }
    );
});
// server.on('request', (req, res) => {
//     console.log(req, res);
//     res.end('OOOOOOO');
//     debugger;
// });
server.listen(port, () => {
    console.log(`Start http.server listen ${port}`);
});
