'use strict';
// x+y x-y
const chaining = x => ( y, callback, error ) => {
    try {
        const res = callback ( x, y );
        console.log ( res );
        return chaining ( res );
    }
    catch (e) {
        if ( error ) {
            error ( e );
            return chaining ( x );
        }
        throw Error ( e.message );
    }

};

const cerr = () => {throw Error ( 'From cerr' );};

const add = ( a, b ) => a + b;
const err = e => console.error ( { e } );

const unadd = ( a, b ) => a - b;

debugger;
const ch = chaining ( 1 ) ( 2, add, err ) ( 10, unadd, err );