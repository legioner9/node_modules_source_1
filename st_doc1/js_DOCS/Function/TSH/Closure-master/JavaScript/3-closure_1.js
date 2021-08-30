'use strict';

const add = x => y => {
    const sum = ( a, b ) => {
        return a + b;
    };
    console.log ( x + '+' + y + '=' + sum(x,y));
    return sum(x,y);
};

// const add = x => y => x + y;

// Usage
debugger
const res = add ( 3 ) ( 6 );
console.log ( res );
