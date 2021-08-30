const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
// Ex.call ();
debugger
const su_try = Ex.SetTry.TryCatch;
const su_equal = Ex.SetAssert.DeepEqual;
console.log ( su_try.help );
console.log ( su_equal.help );
debugger;
// --- AssertionError ---

const a = { a: 'a' };
const a_ = { a: 'a' };
a.__proto__.Proto = () => {};
const b = { a: 'a' };

console.log ( '--- deepEqual ---' ); // all true
su_try ( assert.deepEqual ) ( '#to_consJson', null, [ 1 ], [ 1 ] );
su_try ( assert.deepEqual ) ( '#to_consJson', null, [ 1 ], [ '1' ] ); // true!!!
su_try ( assert.deepEqual ) ( '#to_consJson', null, a, a_ );
su_try ( assert.deepEqual ) ( '#to_consJson', null, a, b );
console.log ( '--- End ---' );

console.log ( '--- strictStrictEqual ---' ); // true not every
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, [ 1 ], [ 1 ] );
su_equal ( [ 1 ], [ 1 ] );
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, [ 1 ], [ '1' ] ); //{"generatedMessage":true,"code":"ERR_ASSERTION","actual":[1],"expected":["1"],"operator":"deepStrictEqual"}
su_equal ( [ 1 ], [ '1' ] );
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, a, a_ );
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, a, b );
console.log ( '--- End ---' );

const n = function () {};
const n_ = function () {};
const m = function () {};
m.prototype.Mproto = 'p';

console.log ( 'Func --- deepEqual ---' );
su_try ( assert.deepEqual ) ( '#to_consJson', null, n, n ); // deepStrictEqual args: function () {},function () {} : true
su_try ( assert.deepEqual ) ( '#to_consJson', null, n, n_ ); //{"generatedMessage":true,"code":"ERR_ASSERTION","operator":"deepEqual"}
su_try ( assert.deepEqual ) ( '#to_consJson', null, n, m ); //{"generatedMessage":true,"code":"ERR_ASSERTION","operator":"deepEqual"}
console.log ( '--- End ---' );

console.log ( 'Func--- strictStrictEqual ---' );
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, n, n ); // deepStrictEqual args: function () {},function () {} : true
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, n, n_ ); //{"generatedMessage":true,"code":"ERR_ASSERTION","operator":"deepEqual"}
su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, n, m ); //{"generatedMessage":true,"code":"ERR_ASSERTION","operator":"deepEqual"}
console.log ( '--- End ---' );
debugger;
const rn = () => {};
const rn_ = () => {};

console.log ( '()=>{} --- deepEqual ---' );

su_try ( assert.deepEqual ) ( '#to_consJson', null, rn, rn_ );
console.log ( '--- End ---' );

console.log ( '()=>{}--- strictStrictEqual ---' );

su_try ( assert.deepStrictEqual ) ( '#to_consJson', null, rn, rn_ );
console.log ( '--- End ---' );
debugger;

su_try ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );

