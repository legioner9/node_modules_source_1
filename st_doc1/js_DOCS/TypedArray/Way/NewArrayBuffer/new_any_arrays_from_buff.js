'use strict';

const arrBuff_32byte = new ArrayBuffer(32);

const arr8 = new Int8Array(arrBuff_32byte); // Int8Array(32)
const arr16 = new Int16Array(arrBuff_32byte); // Int16Array(16)
const arr32 = new Int32Array(arrBuff_32byte); //Int32Array(8)

const length = arr32.length;
const byteLength = arr32.byteLength;

for (let i = 0; i < arr32.length; i++) {
    arr32[i] = i * 2;
}

const arrBuff_1024byte = new ArrayBuffer(1024);
const view_1 = new DataView(arrBuff_1024byte);
for (let i = 0; i < arrBuff_1024byte.length; i++) {
    const value = (i + 2) * 3;
    view_1.setInt8(i, value);
}

debugger;