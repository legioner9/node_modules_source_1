'use strict';

const rx = /[abc]/gi;

console.dir ( {
                  rx,
                  flags: rx.flags,
                  global: rx.global,
                  ignoreCase: rx.ignoreCase,
                  multiline: rx.multiline,
                  source: rx.source,
                  sticky: rx.sticky,
                  unicode: rx.unicode,
                  lastIndex: rx.lastIndex,
              } );

console.dir ( {
                  xyz: rx.test ( 'xyz' ),
                  abc: rx.test ( 'abc' )
              } );

const s = 'abcdefgabc';

let res;
do {
    res = rx.exec ( s );
    console.log ( { lastIndex: rx.lastIndex, res } );
}
while ( res );

const rxs = new RegExp ( '((?<=\d*)abc)', 'g' );

const cf = rxs.exec ( 'abc ' );
/// cf: (2) ["abc", "abc", index: 0, input: "abc ", groups: undefined]

const cfi = rxs.exec ( 'tabc ' );
/// cfi: null

const cfii = rxs.exec ( '3abc ' );
debugger;
