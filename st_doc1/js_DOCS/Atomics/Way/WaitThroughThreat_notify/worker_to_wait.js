'use strict';
const threads = require('worker_threads');

const {workerData ,threadId} = threads;
const arr = new Int32Array(workerData);
if (threadId === 1) {
    setTimeout(() => {
        Atomics.store(arr, 0, 5);
        const noti = Atomics.notify(arr, 0, 2);
    }, 100);
} else {
    const w_1 = Atomics.wait(arr, 0, 0);
    console.log({threadId});
}
