'use strict';

const logable = fn => ( ...args ) => {
    const res = fn ( ...args );
    console.log ( `Call: ${ fn.name }(${ args.join ( ', ' ) }) Result: ${ res }` );
    return res;
};

// Usage
debugger
let sum = ( a, b ) => a + b;

sum = logable ( sum ); // hard redefine
const a = sum ( 3, 5 );
const b = sum ( 7, 2 );
const c = sum ( 1, -1 );
console.dir ( { a, b, c } );
