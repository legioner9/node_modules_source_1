'use strict';
'use ndb';
// https://learn.javascript.ru/call-apply-decorators
debugger;
const cashDecor = function ( func, hash = d => {
    const arg = [].join.call ( d );
    return JSON.stringify ( arg );
} ) {
    const hash_func = new Map ();
    return function () {
        let key = hash ( arguments );
        if ( hash_func.has ( key ) ) {
            console.log ( `${ ( console.log ( 'from hash' ), key + '_$_' ) }` );
            return hash_func.get ( key );
        }
        else {
            const res = func.call ( this, ...arguments );
            hash_func.set ( key, res );
            console.log ( `${ ( console.log ( 'from func' ), key + '_@_' ) }` );
            return res;
        }
    };
};

const dec_sum = cashDecor ( ( a, b ) => a + b );
dec_sum ( 19, 3.75 );
dec_sum ( 19, 3.75 );
