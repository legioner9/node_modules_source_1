'use strict';

const threads = require('worker_threads');

const arr_w = new Int8Array(threads.workerData);

while (true) {
    for (let i = 0; i < arr_w.length; i++) {
        arr_w[i] += 1;
    }
}
