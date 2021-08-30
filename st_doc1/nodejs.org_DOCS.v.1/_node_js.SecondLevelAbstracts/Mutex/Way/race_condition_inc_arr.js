'use strict';

const threads = require('worker_threads');
const mod_path = require('path');
const {isMainThread, Worker, workerData, threadId} = threads;

const shared_buffer = new SharedArrayBuffer(10);
if (isMainThread) {

    for (let i = 0; i < 6; i++) {
        new Worker(__filename, {workerData: shared_buffer});
    }

} else {

    const arr = new Int8Array(workerData);
    const decr = threadId % 2 ? 1 : -1;

    setInterval(() => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += decr;
        }
        console.log(decr, arr);
    }, 100);

}
