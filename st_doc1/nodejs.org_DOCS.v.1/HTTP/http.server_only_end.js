const http = require('http');
const port = 3003;

const server = http.createServer();

// const server = http.createServer((req, res) => {
//     console.log(req, res);
//     res.end('OOOOOOO');
// });
server.on('request', (req, res) => {
    console.log(req, res);
    res.end('OOOOOOO');
    debugger;
});
server.listen(port, () => {
    console.log(`Start http.server listen ${port}`);
    console.time('Start http.server');
});
