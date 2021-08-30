'use strict';

const fs = require('fs');
const http = require('http');
const mod_path = require('path');

const port = 3005;
const host = '127.0.0.1';


const cache = new Map();
const lib = mod_path.join(__dirname, 'lib/');
console.log({lib});

const cacheFile = path => {
    const filePath = lib + path;
    try {
        const libPath = require.resolve(filePath);
        delete require.cache[libPath];
    } catch (e) {
        return;
    }
    try {
        const mod = require(filePath);
        cache.set(path, mod);
    } catch (e) {
        cache.delete(path);
    }
};

const cacheFolder = path => {
    fs.readdir(path, (err, files) => {
        if (err) return;
        files.forEach(cacheFile);
    });
};

const watch = path => {
    fs.watch(path, (event, file) => {
        cacheFile(file);
    });
};

cacheFolder(lib);
watch(lib);

const ls = (res, list) => {
    res.write('<html>');
    for (const name of list) {
        res.write(`<li><a href="${name}/">${name}</li>`);
    }
    res.end('</html>');
};

const server = http.createServer((req, res) => {
    const url = req.url.substring(1);
    if (!url) return ls(res, cache.keys());
    const [mod, method] = url.split('/');
    const methods = cache.get(mod);
    if (methods) {
        if (!method) return ls(res, Object.keys(methods));
        const handler = methods[method];
        if (handler) {
            res.end(handler().toString());
            return;
        }
    }
    res.end('File ' + url + 'not found');
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