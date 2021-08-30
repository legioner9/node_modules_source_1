'use strict';

const rx = /abc/gi;
const s = 'abcdefgAbC';
const res = s.replace ( rx, ( sub, pos, str ) => {
    console.dir ( { sub, pos, str } );
    return sub.toUpperCase ();
} );
debugger;
const result = s.replace ( rx, ( sub, pos, str ) => {
    debugger;
    return pos + sub;
} );
/// result: "0abcdefg7AbC"
debugger
