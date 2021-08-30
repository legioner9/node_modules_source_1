const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const my_path = require ( 'path' );
const assert = require ( 'assert' );

const {
    Su_log_to_file,
    SuTry,
} = require ( 'st_ex1' );

const {
    AssertionError,
    deepEqual,
    deepStrictEqual,
    doesNotReject,
    doesNotThrow,
    equal,
    fail,
    ifError,
    notDeepEqual,
    notDeepStrictEqual,
    notEqual,
    notStrictEqual,
    ok,
    rejects,
    strict,
    strictEqual,
    throws,
} = assert;
debugger;
SuTry ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );

const { message } = new assert.AssertionError ( {
                                                    actual: 1,
                                                    expected: 2,
                                                    operator: 'strictEqual'
                                                } );
try {
    assert.strictEqual ( 1, 2 );
}
catch (err) {
    // actual: 1
    // code: "ERR_ASSERTION"
    // expected: 2
    // generatedMessage: true
    // operator: "strictEqual"
    // message: "Expected values to be strictly equal:↵↵1 !== 2↵"
    // name: "AssertionError"
    // stack:"AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:↵↵1 !== 2↵↵    at Object.<anonymous> (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\DOC\1@0.1#my_read.js:29:12)↵    at Module._compile (internal/modules/cjs/loader.js:1139:30)↵    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1159:10)↵    at Module.load (internal/modules/cjs/loader.js:988:32)↵    at Function.Module._load (internal/modules/cjs/loader.js:896:14)↵    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)↵    at internal/main/run_main_module.js:17:47"
    const a1 = assert ( err instanceof assert.AssertionError );
    assert.strictEqual ( err.message, message ); //message: "Expected values to be strictly equal:↵↵1 !== 2↵"
    assert.strictEqual ( err.name, 'AssertionError' );
    assert.strictEqual ( err.actual, 1 );
    assert.strictEqual ( err.expected, 2 );
    assert.strictEqual ( err.code, 'ERR_ASSERTION' );
    assert.strictEqual ( err.operator, 'strictEqual' );
    assert.strictEqual ( err.generatedMessage, true );
}

// try {
//     assert.strictEqual ( 3, 5 );
// }
// catch (e) {
//     const str = `${ JSON.stringify ( e ) }
//     ${ e.stack }
//
//     ${ new Date () }`;
//
//     Su_log ( str );
//
// }
// const SuTry = ( fn ) => ( ...args ) => {
//     try {
//         fn ( ...args );
//     }
//     catch (e) {
//         const str = `${ JSON.stringify ( e ) }
//     ${ e.stack }
//
//     ${ new Date () }`;
//         Su_log ( str );
//     }
// };

// SuTry ( assert.strictEqual ) ( 3, 5 );

