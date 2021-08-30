'use strict';

const s_hash = () => {
    const d = {};
    Object.defineProperty ( d, 'add', {
        enumerable: false,
        value ( key, value ) {
            d[key] = value;
            return d;
        },

    } );

    Object.defineProperty ( d, 'del', {
        enumerable: false,
        value ( key ) {
            if ( !d.hasOwnProperty ( key ) ) {
                console.error ( 'Key is not valid' );
            }
            else {
                delete d[key];
            }
            return d;
        },
    } );
    return d;
};
debugger;
const hh = s_hash ();
const hh1 = hh
    .add ( 'a', 'aa' )
    .add ( 'b', 'bb' )
    .del ( 'b' )
    .del ( 'c' );

const hash = () => {
    const data = {};
    Object.defineProperty ( data, 'add', {
        enumerable: false,
        value ( key, value ) {
            data[key] = value;
            return data;
        }
    } );
    return data;
};

// Usage

console.dir (
    hash ()
        .add ( 'name', 'Marcus' )
        .add ( 'city', 'Roma' )
        .add ( 'born', 121 )
);
