const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
// Ex.call ();
const su_try = Ex.SetTry.TryCatch;
const promiseErr = Ex.SetErrors.PromiseErrors;
console.log ( promiseErr.help );
promiseErr ();
debugger;
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

// (async () => {
//     await assert.doesNotReject(
//         async () => {
//              //true
//         },
//         {
//             name: 'TypeError',
//             message: 'Wrong value'
//         }
//     );
// })();

// ( async () => {
//     await assert.doesNotReject (
//         async () => {
//             throw new TypeError ( 'Wrong value' ); //true
//         },
//         SyntaxError
//     );
// } ) ();

assert.doesNotReject ( Promise.resolve ( 'resolve' ) )
    .catch (); // true

assert.doesNotReject ( Promise.reject ( 'reject' ) )
    .catch (); // AssertionError [ERR_ASSERTION]: Got unwanted rejection.

// su_try ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );


