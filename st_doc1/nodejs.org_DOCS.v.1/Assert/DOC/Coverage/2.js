const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
// Ex.call ();
const su_try = Ex.SetTry.TryCatch;
console.log ( su_try.help );

const {
    // AssertionError,
    // deepEqual,
    // deepStrictEqual,
    doesNotReject,
    doesNotThrow,
    // equal,  // DEPR
    // fail,
    // ifError,
    // notDeepEqual,
    // notDeepStrictEqual,
    // notEqual,
    // notStrictEqual,
    // ok,
    rejects,
    // strict,
    // strictEqual,
    throws,
} = assert;


(async () => {
    await assert.rejects(
        async () => {
             //[ERR_ASSERTION]: Missing expected rejection (TypeError)
        },
        {
            name: 'TypeError',
            message: 'Wrong value'
        }
    );
})();

( async () => {
    await assert.rejects (
        async () => {
            throw new TypeError ( 'Wrong value' ); //true
        },
        {
            name: 'TypeError',
            message: 'Wrong value'
        }
    );
} ) ();

( async () => {
    await assert.rejects (
        async () => {
            throw new TypeError ( 'Wrong value' ); //true
        },
        {
            name: 'TypeError',
            message: 'Wrong value 555'
        }
    );
} ) ();

//internal/process/warning.js:31 (node:4176) UnhandledPromiseRejectionWarning: AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
// + actual - expected
//
// Comparison {
//     +   message: 'Wrong value',
//         -   message: 'Wrong value 555',
//         name: 'TypeError'
// }




assert.rejects ( Promise.resolve ( 'resolve' ) )
    .catch (); // [ERR_ASSERTION]: Missing expected rejection

assert.rejects ( Promise.reject ( 'reject' ) )
    .catch (); // true

// su_try ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );
