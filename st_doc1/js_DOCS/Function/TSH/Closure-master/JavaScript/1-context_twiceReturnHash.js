'use strict';

const s_hach = () => {
    const d = {};
    let c = 0;
    return ( key, value ) => {
        c++;
        d[key] = value;
        return d;
    };
};

debugger;
const hh = s_hach ();
const hh1 = hh ( 'a', 'aa' );

const hash = () => {
    const data = {};
    let counter = 0;
    return ( key, value ) => {
        data[key] = value;
        counter++;
        console.dir ( { counter } );
        return data;
    };
};


// Usage

const h1 = hash ();
h1 ( 'name', 'Marcus' );
h1 ( 'city', 'Roma' );
const obj1 = h1 ( 'born', 121 );
console.dir ( { obj1 } );
