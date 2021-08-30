'use strict';

const mod_path = require('path');
const fs = require('fs');


const gettingCache = function (dir_path) {

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

    cacheFolder(dir_path);
    watch(dir_path);
    return cache;
};

module.exports = gettingCache;