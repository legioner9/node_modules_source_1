const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const RSTR = require ( 'stream' ).Readable;

const rstr_generator = new RSTR ( {
                                      read ( size ) {
                                          this.push ( (this.count++).toString() );
                                          if ( this.count > 10 ) this.push ( null );
                                          debugger;
                                      }
                                  } );
rstr_generator.count = 0;
Ini.pipeLine ( rstr_generator, process.stdout );
console.log ( 'end of file' );