const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const TSTR = require ( 'stream' ).Transform;

const native_Transform = new TSTR ( {
                                        readableObjectMode: false,
                                        transform ( chunk, encoding, callback ) {
                                            this.push (chunk.toString ().toUpperCase ());
                                            callback ();
                                        }

                                    } );

native_Transform.write ( 'PuSh duplex \n' );


Ini.pipeLine ( native_Transform, process.stdout );
console.log ( 'end of file' );