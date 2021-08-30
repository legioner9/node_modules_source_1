'use strict';

const chainAcshObj = ( callback, opt = false ) => {
    const d = {};

    Object.defineProperty ( d, 'acsh', {
        enumerable: false,
        value ( key, value ) {
            if ( opt === true ) debugger;

            if ( typeof key === 'object' ) key = JSON.stringify ( key );
            else if ( !( typeof key === 'string' ) ) key = String ( key );

            d[key] = callback ( key ,value);
            const res = d[key];
            if ( opt === true ) console.log ( {
                                                  key,
                                                  res
                                              } );
            return d;
        },

    } );

    return d;
};
debugger;
const hh = chainAcshObj ( ( a, b ) => a + b, true );
const hh1 = hh
    .acsh ( 1, 2 )
    .acsh ( { 'b': 'bb' }, 'bbb' )
    .acsh ( 'c', 'cc' );
//hh1:
// 1: "12"
// c: "ccc"
// {"b":"bb"}: "{"b":"bb"}bbb"



