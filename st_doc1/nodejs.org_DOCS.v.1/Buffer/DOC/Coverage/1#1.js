const buff_utf8 = Buffer ( 'Your string ', 'utf8' ); // Buffer(12) [89, 111, 117, 114, 32, 115, 116, 114, 105, 110, 103, 32]
const str_utf8 = buff_utf8.toString ( 'utf8' ); // 'Your string '
const str_utf8_2 = buff_utf8.toString (); // 'Your string '

const buff_ucs2 = Buffer ( 'Your string', 'ucs2' );
const str_ucs2 = buff_utf8.toString ('ucs2'); // "潙牵猠牴湩"
const str_ucs2_2 = buff_ucs2.toString ('ucs2'); // str_ucs2_2: "Your string"


const buff_utf16le = Buffer ( 'Your string', 'utf16le' );
const str_utf16le = buff_utf8.toString ('utf16le'); // str_utf16le: "潙牵猠牴湩⁧"

const buff_latin1 = Buffer ( 'Your string', 'latin1' );
const str_latin1 = buff_utf8.toString ('latin1'); // str_latin1: "Your string "

const buff_ascii = Buffer ( 'Your string', 'ascii' );
const str_ascii = buff_utf8.toString ('ascii'); // "Your string "

const buff_base64 = Buffer ( 'Your string', 'base64' );
const str_base64 = buff_utf8.toString ('base64'); // str_base64: "WW91ciBzdHJpbmcg"

const buff_hex = Buffer ( 'Your string Your string Your string ', 'hex' );// []
const str_hex = buff_utf8.toString ('hex'); // str_hex: "596f757220737472696e6720"
debugger;
