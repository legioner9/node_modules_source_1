const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const DSTR = require ( 'stream' ).Duplex;

const native_Duplex = new DSTR ( {
                                     write ( chunk, encoding, callback ) {
                                         this.data = chunk;

                                     },
                                     read ( size ) {
                                         debugger;
                                         this.push ( ( this.data ).toString().toUpperCase() );
                                         this.push ( null );
                                     }
                                 } );

native_Duplex.write( 'PuSh duplex' );

Ini.pipeLine ( native_Duplex, process.stdout );
console.log ( 'end of file' );