const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const DSTR = require ( 'stream' ).Duplex;

const native_Duplex = new DSTR ( {
                                     write ( chunk, encoding, callback ) {
                                         this.data = chunk;

                                     },
                                     read ( size ) {
                                         this.push ( ( this.data ).toString().toUpperCase() );
                                         this.push ( null );
                                     }
                                 } );

process.stdin.push ( 'PuSh duplex' );

Ini.pipeLine ( process.stdin, native_Duplex );
Ini.pipeLine ( native_Duplex, process.stdout );
console.log ( 'end of file' );