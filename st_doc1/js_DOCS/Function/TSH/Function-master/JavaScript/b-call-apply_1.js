'use strict';

/**
 * @class
 * @lends #IPerson
 * @extends #DataCue
 * for call and apply learn
 * @param a : {string} 4 char
 * @param b : {arr} [times] - sax
 * @returns : {string}
 */
function f1 ( a, b ) {
    /**
     *
     * @type {number}
     */
    const s = 0;
    return 'f1(' + a + ', ' + b + ')';
}

debugger;
const a1 = f1 ( 2, 3 );
const a2 = f1.call ( null, 2, 3 );

const arr = [ 2, 3 ];
const a4 = f1 ( ...arr );
const a5 = f1.apply ( null, arr );

