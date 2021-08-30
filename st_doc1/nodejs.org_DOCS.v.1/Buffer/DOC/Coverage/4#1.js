const buf = Buffer.alloc ( 5, 'a' );
const buf_2 = Buffer.alloc ( 11, 'aGVsbG8gd29ybGQ=', 'base64' );
const buf_3 = Buffer.alloc ( 10, 'aGVsbG8gd29ybGQ=', 'base64' );
const buf_4 = Buffer.alloc ( 9, 'aGVsbG8gd29ybGQ=', 'base64' );

const str_buf_2 = buf_2.toString ( 'base64' );
const str_buf_3 = buf_3.toString ( 'base64' );
const str_buf_4 = buf_4.toString ( 'base64' );

//buf_2: Buffer(11) [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// buf_3: Buffer(10) [104, 101, 108, 108, 111, 32, 119, 111, 114, 108]
// buf_4: Buffer(9) [104, 101, 108, 108, 111, 32, 119, 111, 114]
// str_buf_2: "aGVsbG8gd29ybGQ="
// str_buf_3: "aGVsbG8gd29ybA=="
// str_buf_4: "aGVsbG8gd29y"
debugger;