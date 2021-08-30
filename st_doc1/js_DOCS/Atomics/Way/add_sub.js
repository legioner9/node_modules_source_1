
'use strict';

const shared_buffer = new SharedArrayBuffer(257);
const arr = new Int8Array(shared_buffer);

const prevAdd = Atomics.add(arr, 0, 19);
const prevSub = Atomics.sub(arr, 0, -19);

debugger;