'use strict';
const mod_path = require('path');
const threads = require('worker_threads');
const {Worker} = threads;

console.dir({master: threads});
const workerData = {text: 'Data from Master to Worker'};
const worker = new Worker(mod_path.join(__dirname, './2-worker.js'), {workerData});

worker.postMessage('Message from Master to Worker');
worker.on('message', (...args) => {
    console.log({args});
});
worker.on('error', err => {
    console.log(err.stack);
});
worker.on('exit', code => {
    console.dir({code});
});

setTimeout(() => {
    worker.terminate().then(code => {
        console.log({code});
        debugger;
    }, e => {
        console.log({e});
        debugger;
    });
}, 1000);
