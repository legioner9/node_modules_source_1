const buf1 = Buffer.from ( 'ABC' );
const buf2 = Buffer.from ( 'BCD' );
const buf3 = Buffer.from ( 'ABCD' );

console.log ( buf1.compare ( buf1 ) );
// Prints: 0
console.log ( buf1.compare ( buf2 ) );
// Prints: -1
console.log ( buf1.compare ( buf3 ) );
// Prints: -1
console.log ( buf2.compare ( buf1 ) );
// Prints: 1
console.log ( buf2.compare ( buf3 ) );
// Prints: 1
console.log ( [ buf1, buf2, buf3 ].sort ( Buffer.compare ) );
// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2].)

//(3) [Buffer(3), Buffer(4), Buffer(3)]
// 0: Buffer(3) [65, 66, 67]
// 1: Buffer(4) [65, 66, 67, 68]
// 2: Buffer(3) [66, 67, 68]

// Create a single `Buffer` from a list of three `Buffer` instances.

const buf_1 = Buffer.alloc ( 3 );
const buf_2 = Buffer.alloc ( 4 );
const buf_3 = Buffer.alloc ( 5 );
const totalLength = buf_1.length + buf_2.length + buf_3.length;

const buf_A = Buffer.concat ( [ buf_1, buf_2, buf_3 ] );

// Creates a new Buffer containing UTF-8 bytes of the string 'buffer'.
const buf_4 = Buffer.from ( [ 0x62, 0x75, 0x66, 0x66, 0x65, 0x72 ] );//buf_4: Buffer(6) [98, 117, 102, 102, 101, 114]
const str_buf_4 = buf_4.toString (); // str_buf_4: "buffer"

debugger;