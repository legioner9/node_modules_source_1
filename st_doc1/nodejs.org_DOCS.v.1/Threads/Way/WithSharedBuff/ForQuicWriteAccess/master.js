'use strict';

const threads = require('worker_threads');
const mod_path = require('path');
const {Worker} = threads;

const buff = new SharedArrayBuffer(16);
const arr = new Int8Array(buff);

const wo = new Worker(mod_path.join(__dirname, 'access.js'), {workerData: buff});

setInterval(() => {
    console.log(buff)
}, 100);

process.stdin.resume();

process.on('SIGINT', () => {
    debugger;
    wo.terminate()
        .then(code => console.log('Exit worker ::', {code}))
        .catch(e => {
            if (e) console.error(e)
        });
});

