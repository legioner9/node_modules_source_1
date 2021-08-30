'use strict';

const threads = require('worker_threads');

console.dir({worker: threads});
threads.parentPort.postMessage('Message from Worker to Master');
debugger;
threads.parentPort.on('message', data => {
    console.dir({data});
    debugger;
});

//process.exit(0);
