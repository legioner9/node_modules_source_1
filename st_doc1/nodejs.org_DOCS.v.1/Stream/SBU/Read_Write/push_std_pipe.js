const wrOn = require ( 'st_ini' ).wrOn;
const wrOn = require ( 'st_ini' ).wrOn;
const wrOnce = require ( 'st_ini' ).wrOnce;
const http0 = require ( 'st_ini' ).http0;
const pipeLine = require ( 'st_ini' ).pipeLine;
const { wOn, rOn } = wrOn ();
const { wOnce, rOnce } = wrOnce ();

const my_path = require ( 'path' );
const fs = require ( "fs" );

process.stdin.push ( 'chunc_3 \n' );
process.stdin.push ( 'chunc_5 \n' );

pipeLine ( process.stdin, fs.createWriteStream ( my_path.join ( __dirname, 'Std', 'log_stdin.txt' ) ) );

console.log ( 'end of file' );