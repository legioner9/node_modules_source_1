'use strict';

const shared_buffer = new SharedArrayBuffer(32);
const arr = new Int32Array(shared_buffer);
const threads = require('worker_threads');
const mod_path = require('path');
const {isMainThread, Worker} = threads;


const wo = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});
const wo_ = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});
const wo__ = new Worker(mod_path.join(__dirname, 'worker_to_wait.js'), {workerData: shared_buffer});

const w_1 = Atomics.wait(arr, 0, 0); //w_1: "ok"
const w_2 = Atomics.wait(arr, 0, 0); //w_2: "not-equal"
debugger;

console.log(arr);
