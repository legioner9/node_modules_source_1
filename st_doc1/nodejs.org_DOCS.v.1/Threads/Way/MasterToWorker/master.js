'use strict';

const WT = require('worker_threads');
const mod_path = require('path');

const workerData = {t_1: 'ttt_1'};
const wo = new WT.Worker(mod_path.join(__dirname, 'worker.js'), {workerData});
wo.postMessage({t_2: 'ttt_2'});
wo.on('message', (...args) => console.log(args));

setTimeout(() => {
    wo.terminate().then(code => {
        console.log({code});
    }, e => {
        console.log({e});
    });
}, 1000);