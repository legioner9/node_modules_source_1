'use strict';

const cluster = require('cluster');
const path = require('path');

if (cluster.isMaster) {
    debugger;
    require(path.join(__dirname, 'master'));

} else {
    debugger;
    require(path.join(__dirname, 'worker'));
}

