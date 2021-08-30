'use strict';

const fs = require('fs');
const http = require('http');
const mod_path = require('path');

const port = 3005;
const host = '127.0.0.1';

const cache = new Map();

const cacheFile = path => {
    fs.readFile(mod_path.join(dir_path, path), 'utf8', (err, data) => {
        if (err) {
            cache.delete(path);
            return;
        }
        cache.set(path, data);
    });
};

const cacheFolder = path => {
    fs.readdir(path, (err, files) => {
        console.log(files);
        if (err) return;
        files.forEach(cacheFile);
    });
};

const watch = path => {
    fs.watch(path, (event, file) => {
        cacheFile(file);
    });
};

const dir_path = __dirname;
cacheFolder(dir_path);
watch(dir_path);

const server = http.createServer((req, res) => {
    const url = req.url.substring(1);// req.url = /1.txt
    // substring(1) return from index = 1 to end
    console.log({url, cache});

    const data = cache.get(url);
    if (data) res.end(data);
    else res.end('File ' + url + 'not found');
}).listen(port, host, () => {
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
// See https://github.com/HowProgrammingWorks/LiveReload
