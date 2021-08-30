// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc ( 10 );

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc ( 10, 1 );

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe ( 10 );

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from ( [ 1, 2, 3 ] );

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf5 = Buffer.from ( 'tést' );

const buf5_1  = Buffer.from ( 'tést', '');

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf6 = Buffer.from ( 'tést', 'latin1' );

const buf = Buffer.from('hello world', 'ascii'); // buf: Buffer(11) [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

const buf7 = buf.toString('hex'); // buf7: "68656c6c6f20776f726c64"
// Prints: 68656c6c6f20776f726c64
const buf8 = buf.toString('base64'); // buf8: "aGVsbG8gd29ybGQ="
// Prints: aGVsbG8gd29ybGQ=

const buf9 = Buffer.from('fhqwhgads', 'ascii'); // Buffer(9) [102, 104, 113, 119, 104, 103, 97, 100, 115]
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
const buf10 = Buffer.from('fhqwhgads', 'utf16le'); // buf10: Buffer(18) [102, 0, 104, 0, 113, 0, 119, 0, 104, 0, 103, 0, 97, 0, 100, 0, 115, 0]
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

debugger;