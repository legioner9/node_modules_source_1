'use strict';

const threads = require('worker_threads');
const mod_path = require('path');
const {isMainThread, Worker,workerData ,threadId} = threads;

const shared_buffer = new SharedArrayBuffer(32);
const arr = new Int32Array(shared_buffer);

const wo = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});
const wo_ = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});
const wo__ = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});

console.log(arr);
