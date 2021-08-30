const Ini = require ( 'st_ini' );

const my_path = require ( 'path' );
const fs = require ( "fs" );
const TSTR = require ( 'stream' ).Transform;

const commaSplitter = new TSTR ( {
                                     readableObjectMode: true,

                                     transform ( chunk, encoding, callback ) {
                                         const d = chunk
                                             .toString () // 'a,b,c,d'
                                             .trim ()
                                             .split ( ',' ); // ["a", "b", "c", "d"]
                                         this.push ( d );
                                         callback ();
                                     }
                                 } );

const arrayToObject = new TSTR ( {
                                     readableObjectMode: true,
                                     writableObjectMode: true,

                                     transform ( chunk, encoding, callback ) {
                                         let obj = {};
                                         for ( let i = 0 ; i < chunk.length ; i += 2 ) {
                                             obj[chunk[i]] = chunk[i + 1];
                                         }
                                         this.push ( JSON.stringify ( obj ) );
                                         callback ();
                                     }
                                 } );

commaSplitter.write ( 'a,b,c,d' );

commaSplitter
    .pipe ( arrayToObject )
    .pipe ( process.stdout );

console.log ( 'eF :', Ini.SM () );