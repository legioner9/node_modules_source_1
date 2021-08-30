const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );

process.stdin.push ( 'Push to stdin' );

process.stdin.on ( 'data', ( d ) => {
    process.stdout.write ( d.toString().toUpperCase() );
} );

// process.stdin.on ( 'end', ( ) => {
//     process.stdout.write ( null );
// } );
console.log ( 'end of file' );