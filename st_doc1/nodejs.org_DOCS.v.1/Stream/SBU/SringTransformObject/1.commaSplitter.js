const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const TSTR = require ( 'stream' ).Transform;

const commaSplitter = new TSTR ( {
                                     readableObjectMode: true,
                                     writableObjectMode: true,

                                     transform ( chunk, encoding, callback ) {
                                         const d = chunk
                                             .toString () // 'a,b,c,d'
                                             .trim ()
                                             .split ( ',' ); // ["a", "b", "c", "d"]
                                         this.push ( JSON.stringify ( d ) );
                                         callback ();
                                     }
                                 } );

commaSplitter.write ( 'a,b,c,d' );
commaSplitter.pipe ( process.stdout );
console.log ( 'eF :', Ini.SM () );