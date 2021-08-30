const sym = Symbol ( '_sym' );
Symbol.sym = 10;
Symbol[Symbol ( 'Symbol.prop_1' )] = 20;

const a = {};
a[Symbol ( 'prop_1' )] = 40;

const arg = Object.getOwnPropertyNames ( a ); // []
const arg_s = Object.getOwnPropertySymbols ( a ); //
/*
arg_s = Array(1)
0: Symbol(prop_1)
length: 1
__proto__: Array(0)
*/
const sw = Symbol.for ( 'w' );
const sw_1 = Symbol.for ( 'w' );

console.assert ( sw !== sw_1, 'sw!==sw_1' );
//1.js:18 Assertion failed: sw!==sw_1

const key_sw = Symbol.keyFor ( sw ); // w

console.log ( Object.getOwnPropertySymbols ( a )[0] );

process[Symbol.for ( 'i' )] = {a:'aa'};

debugger
