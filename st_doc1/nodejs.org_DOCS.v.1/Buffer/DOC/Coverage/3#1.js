const arr = new Uint16Array ( [ 1, 3, 5 ] );
//arr: Uint16Array(3)
// 0: 1
// 1: 3
// 2: 5
// buffer: ArrayBuffer(6)
// [[Int8Array]]: Int8Array(6) [1, 0, 3, 0, 5, 0]
// [[Int16Array]]: Int16Array(3) [1, 3, 5]
// [[Uint8Array]]: Uint8Array(6) [1, 0, 3, 0, 5, 0]
// byteLength: 6

const buf = Buffer.from ( arr.buffer, 0, 3 );
//[[Uint8Array]]: Uint8Array(6) [1, 0, 3, 0, 5, 0] => slice (0, 3) === [1, 0, 3];

let res_ar = [];
let i = 0;
for ( const item of buf ) {
    res_ar[i++] = item; // res_ar = [1, 0, 3]
}

debugger;
