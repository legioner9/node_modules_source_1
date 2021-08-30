const buf1 = Buffer.from ( 'this is a tést' );
// buf1: Buffer(15) [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 195, 169, 115, 116]

const hex_1 = buf1.toString ( 'hex' );
const buf2 = Buffer.from ( '7468697320697320612074c3a97374', 'hex' );

const convert_str_utf8_to_hex = Buffer.from ( 'this is a tést' ).toString ( 'hex' );
//

//


debugger;

