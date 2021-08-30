const s1 = String.fromCodePoint ( 42 );       // "*"
const s2 = String.fromCodePoint ( 65, 90 );   // "AZ"
const s3 = String.fromCodePoint ( 0x404 );    // "\u0404"
const s4 = String.fromCodePoint ( 0x2F804 );  // "\uD87E\uDC04"
const s5 = String.fromCodePoint ( 194564 );   // "\uD87E\uDC04"
const s6 = String.fromCodePoint ( 0x1D306, 0x61, 0x1D307 ); // "\uD834\uDF06a\uD834\uDF07"

const sp1 = 'ABC'.codePointAt(1);          // 66
const sp2 = '\uD800\uDC00'.codePointAt(0); // 65536
const sp3 = '\uD800'.codePointAt(0); // 55296

debugger