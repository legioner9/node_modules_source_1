const arr = new Uint16Array ( [ 5000, 4000 ] );
//arr: Uint16Array(2)
// 0: 5000
// 1: 4000
// buffer: ArrayBuffer(4)
// [[Int8Array]]: Int8Array(4) [-120, 19, -96, 15]
// [[Int16Array]]: Int16Array(2) [5000, 4000]
// [[Int32Array]]: Int32Array [262149000]
// [[Uint8Array]]: Uint8Array(4) [136, 19, 160, 15]

const arr8_from_arr16 = new Uint8Array ( ( new Uint16Array ( [ 5000, 4000 ] ) ).buffer );
// Int16Array(2) [5000, 4000] => Uint8Array(4) [136, 19, 160, 15]

const arr16 = new Uint16Array ( arr.buffer );
//arr16: Uint16Array(2)
// 0: 5000
// 1: 4000

const arr8 = new Uint8Array ( arr.buffer );
// [[Uint8Array]]: Uint8Array(4) [136, 19, 160, 15]

const arr_buffer = arr.buffer;
// arr_buffer: ArrayBuffer(4)
// [[Int8Array]]: Int8Array(4) [-120, 19, -96, 15]
// [[Int16Array]]: Int16Array(2) [5000, 4000]
// [[Int32Array]]: Int32Array [262149000]
// [[Uint8Array]]: Uint8Array(4) [136, 19, 160, 15]

const buf1 = Buffer.from ( arr ); // Not Type Array : (Int16Array(2) [5000, 4000] => Buffer(2) [136, 160]
// buf1: Buffer(2) [136, 160]

const arr_buf1 = Array.from ( buf1 );
//arr_buf1: Array(2)
// 0: 136
// 1: 160
// length: 2

const buf2 = Buffer.from ( arr.buffer ); // Buffer.from => [[Uint8Array]]: Uint8Array(4) [136, 19, 160, 15]
//buf2: Buffer(4)
// 0: 136
// 1: 19
// 2: 160
// 3: 15

const arr_buf2 = Array.from ( buf2 );
//arr_buf2: Array(4)
// 0: 136
// 1: 19
// 2: 160
// 3: 15
// length: 4

debugger;