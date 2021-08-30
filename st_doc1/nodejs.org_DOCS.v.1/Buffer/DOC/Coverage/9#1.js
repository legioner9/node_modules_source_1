const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
const su_try = Ex.SetTry.TryCatch;
const su_equal = Ex.SetAssert.DeepEqual;
console.log ( su_try.help );
console.log ( su_equal.help );

const buf1 = Buffer.from ( 'this is a tést' );
const buf2 = Buffer.from ( '7468697320697320612074c3a97374', 'hex' );

// su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, buf1, buf2 );
const re = su_equal ( buf1, buf1 );
debugger;

const convert_str_utf8_to_hex = Buffer.from ( 'this is a tést' ).toString ( 'hex' );
//

const convert_str_hex_to_utf8 = Buffer.from ( '7468697320697320612074c3a97374', 'hex' ).toString ( 'utf8' );
//

debugger;

