'use strict';

const mod_path = require('path');

const dir_path = __dirname;
const serv = require(mod_path.join(dir_path, 'S_serv_with_handler.js'));
const getCache = require(mod_path.join(dir_path, 'L_watchFs_returnCache.js'));
const memoryUsageLog = require(mod_path.join(dir_path, 'Additional','memoryUsageLog'));

const lib = mod_path.join(__dirname, 'lib/');
console.log({lib});

const cache = getCache(lib);

serv(cache);
