'use strict';

const cluster = require('cluster');
const path = require('path');

if (cluster.isMaster) {
    require(path.join(__dirname, 'master'));
} else {
    require(path.join(__dirname, 'worker'));
}

