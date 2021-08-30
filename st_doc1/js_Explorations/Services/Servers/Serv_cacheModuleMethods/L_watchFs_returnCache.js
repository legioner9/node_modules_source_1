'use strict';

const mod_path = require('path');
const fs = require('fs');


const gettingCache = function (dir_path) {

    const cache = new Map();

    const cacheFile = path => {
        const filePath = mod_path.join(dir_path, path);
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

    cacheFolder(dir_path);
    watch(dir_path);
    return cache;
};

module.exports = gettingCache;