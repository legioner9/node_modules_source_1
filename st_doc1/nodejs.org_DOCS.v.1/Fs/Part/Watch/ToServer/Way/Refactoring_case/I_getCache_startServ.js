'use strict';

const mod_path = require('path');

const dir_path = __dirname;
const serv = require(mod_path.join(dir_path, 'S_serv_with_handler.js'));
const getCache = require(mod_path.join(dir_path, 'L_watchFs_returnCache.js'));

const cache = getCache(dir_path);

serv(cache);
