require ( 'st_ex1' );
const a = { a: 'aa', b: { a1: [ 1, 2 ], a2: [ 3, 4 ] } };

Object.defineProperty ( a, 'hidden', {
    enumerable: false,
    writable: false,
    value: 13
} );

console.dir ( a, {
    showHidden: true,
    depth: 20,
    colors: true
} );
console.DirAll ( a );
debugger;