'use strict';

const shared_buffer = new SharedArrayBuffer(257);
const arr = new Int8Array(shared_buffer);

const exch = Atomics.exchange(arr, 1, 33);
const exch_exp_1 = Atomics.compareExchange(arr, 1, 33, 77);
const exch_exp_2 = Atomics.compareExchange(arr, 1, 33, 88);

debugger;