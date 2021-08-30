const wrOn = require ( 'st_ini' ).wrOn;
const wrOnce = require ( 'st_ini' ).wrOnce;
const http0 = require ( 'st_ini' ).http0;
const pipeLine = require ( 'st_ini' ).pipeLine;
const { wOn, rOn } = wrOn ();
const { wOnce, rOnce } = wrOnce ();

const my_path = require ( 'path' );
const fs = require ( "fs" );

const wsfs = fs.createWriteStream ( my_path.join ( __dirname, 'Std', 'log_stdin_2.txt' ) );
wsfs.write ( 'step_3 \n' );
wsfs.write ( 'step_5 \n' );
wsfs.end ( 'The end' );
console.log ( 'end of file' );