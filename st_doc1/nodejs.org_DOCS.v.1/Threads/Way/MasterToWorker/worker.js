'use strict';

const WT = require('worker_threads');

console.log(WT.workerData);

WT.parentPort.on('message', (d) => {
    debugger;
    const data = Up(d.t_2);
    WT.parentPort.postMessage([`Return :: `, data]);
});

/**
 * @return {string}
 */
function Up(d) {
    return d.toUpperCase();
}
