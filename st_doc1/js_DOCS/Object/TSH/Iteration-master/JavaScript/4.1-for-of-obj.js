'use strict';

const hash = {
    first: 7,
    second: 10,
    third: 1,
    fourth: 5,
};

hash.fifth = 2;
debugger;

// for ( const value of hash ) {
//     debugger; // Error hash is not iterable
// }
for (let [key, value] of Object.entries(hash)) {
    console.log(`${key}: ${value}`);
}
