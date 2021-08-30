const m1 = [ ...'true false'.matchAll ( /.s/g ) ];
/// ["ls", index: 7, input: "true false", groups: undefined]

// \d === [0-9]
const m2 = [ ...'2s 44s false'.matchAll ( /\ds/g ) ];
/// "2s", index: 0,
/// "4s", index: 4,

// \D === [^0-9]
const m3 = [ ...'2s 44s false'.matchAll ( /\Ds/g ) ];
/// "ls", index: 9,

// \w === [A-Za-z0-9_]
const m4 = [ ...'2s 2тs  false'.matchAll ( /\w+s/g ) ];
/// "2s", index: 0,
///"fals", index: 7,

// \W === [^A-Za-z0-9_]
const m5 = [ ...'2s  s55 false'.matchAll ( /\W+s\w/g ) ];
/// "  s5", index: 2,

// \s === [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​\u3000]
const m6 = [ ...'2s 44s  \n str false'.matchAll ( /\s+s/g ) ];
///"  ↵ s"

// \S nearly \w but only english symbol
// \S === [ ^\f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​\u3000]
const m7 = [ ...'2s 2тs false'.matchAll ( /\S+s/g ) ];
/// "2s", index: 0,
/// "2тs", index: 3,
/// "fals", index: 7,

// * never or any once
// ^ begin string
const m8 = [ ...'srtЮ 2s 44s s  false'.matchAll ( /^s\S*/g ) ];
/// "srtЮ", index: 0,

const m8_1 = [ ...'srtЮ 2s 44s s  false'.matchAll ( /^s\w*/g ) ];
/// "srt", index: 0,

// $ end of string
const m9 = [ ...'2s 44s s srtЮ falseБ'.matchAll ( /s\S*$/g ) ];
/// "seБ", index: 17,

// \b border of word
const m10 = [ ...'2s 44s\n s srtЮ falseБ'.matchAll ( /s\S*\b/g ) ];
/// "s", index: 1,
/// "s", index: 5,
/// "s", index: 8,
/// "srt", index: 10,
/// "se", index: 18,

// \B non border of word
const m11 = [ ...'2s 44s\n s srtЮ falseБ'.matchAll ( /\S*s\B/g ) ];
/// "s", index: 10,
/// "fals", index: 15,

const m12 = '2srtu srtu'.matchAll ( /(\d+)(sr\S*\b)/g );
for ( const item of m12 ) {
    console.log ( item, RegExp.$1, RegExp.$2 );
    // item: Array(3)
    // 0: "2srtu"
    // 1: "2"
    // 2: "srtu"
    //  RegExp.$1 = "2"
    //  RegExp.$2 = "srtu"
}

// \n  n - integer positive
const m13 = [ ...'яблоко, апельсин,, вишня, персик'.matchAll ( /яблоко(,)\sапельсин\1*/g ) ];
/// яблоко, апельсин,,


const m14 = [ ...'яблоко апельсин,, вишня, персик яблоко,,, апельсин'.matchAll ( /(яблоко,*)\sапельсин/g ) ];
debugger;

const m15 = [ ...'2s 44s s srtЮ false'.matchAll ( /^s\S*/g ) ];
const m16 = [ ...'2s 44s s srtЮ false'.matchAll ( /^s\S*/g ) ];

