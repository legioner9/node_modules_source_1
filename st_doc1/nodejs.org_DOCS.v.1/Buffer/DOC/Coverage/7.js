const buf1 = Buffer.from ( 'buffer' );
const buf2 = Buffer.from ( buf1 );

buf1[0] = 0x61;
const str_buf1 = buf1.toString ();
const str_buf2 = buf2.toString ();
// buf1: Buffer(6) [97, 117, 102, 102, 101, 114]
// buf2: Buffer(6) [98, 117, 102, 102, 101, 114]
// str_buf1: "auffer"
// str_buf2: "buffer"
debugger;