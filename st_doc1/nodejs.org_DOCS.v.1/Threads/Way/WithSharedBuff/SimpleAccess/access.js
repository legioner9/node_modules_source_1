'use strict';

const threads = require('worker_threads');

const arr_w = new Int8Array(threads.workerData);
arr_w[0] = -370;
threads.parentPort.postMessage({order: 'display'});
