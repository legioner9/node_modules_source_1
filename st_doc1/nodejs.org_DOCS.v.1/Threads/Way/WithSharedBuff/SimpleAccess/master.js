'use strict';

const threads = require('worker_threads');
const mod_path = require('path');
const {Worker} = threads;

const buff = new SharedArrayBuffer(2);
const arr = new Int8Array(buff);

const wo = new Worker(mod_path.join(__dirname, 'access.js'), {workerData: buff});

wo.on("message", msg => {
    if (msg.order === 'display') {
        console.log({valueChange: arr[0]});
    }
});

process.stdin.resume();

process.on('SIGINT', () => {
    debugger;
    wo.terminate()
        .then(code => console.log('Exit worker ::', {code}))
        .catch(e => {
            if (e) console.error(e)
        });
});

