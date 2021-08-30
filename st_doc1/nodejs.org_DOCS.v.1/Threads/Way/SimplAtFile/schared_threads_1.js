'use strict';

const threads = require('worker_threads');
const {isMainThread, Worker, threadId, workerData} = threads;

if (isMainThread) {
    const buffer = new SharedArrayBuffer(10);
    const arr = new Array(buffer);
    const arrint8 = new Int8Array(buffer);
    const arr_threads = [];

    for (let i = 0; i < 10; i++) {
        arr_threads[i] = new Worker(__filename, {workerData: buffer});
    }

} else {
    const array = new Int8Array(workerData);
    const value = threadId % 2 === 1 ? 1 : -1;
    setInterval(() => {
        for (let i = 0; i < 10; i++) {
            array[i] += value;
        }
        console.log([threadId, value, array]);
    }, 100);

}
