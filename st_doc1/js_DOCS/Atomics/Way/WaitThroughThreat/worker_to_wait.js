'use strict';
const threads = require('worker_threads');

const {workerData} = threads;
const arr = new Int32Array(workerData);

setTimeout(() => {
    Atomics.store(arr, 0, 5);
    const noti = Atomics.notify(arr, 0, 1);
    debugger;
}, 100);
