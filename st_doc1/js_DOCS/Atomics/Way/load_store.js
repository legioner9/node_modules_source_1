'use strict';

const shared_buffer = new SharedArrayBuffer(257);
const arr = new Int8Array(shared_buffer);

for (let i = 0; i < 256; i++) {
    Atomics.store(arr, i, i);
}
const res = [];
for (let i = 0; i < 256; i++) {
    res.push(Atomics.load(arr, i));
}
debugger;