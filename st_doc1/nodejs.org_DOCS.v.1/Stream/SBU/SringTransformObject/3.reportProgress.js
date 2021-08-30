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
                                         // this.push ( JSON.stringify ( obj ) );
                                         callback ( null, JSON.stringify ( obj ) );
                                     }
                                 } );

const reportProgress = new TSTR ( {
                                      readableObjectMode: true,
                                      writableObjectMode: true,
                                      transform ( chunk, encoding, callback ) {
                                          process.stdout.write ( '.' );
                                          callback ( null, chunk );
                                      }
                                  } );

commaSplitter.write ( 'a,b,c,d' );

commaSplitter
    .on ( 'data', ( d ) => console.log ( 'commaSplitter : ', d ) )
    .pipe ( arrayToObject )
    .on ( 'data', ( d ) => console.log ( 'arrayToObject : ', d ) )
    .pipe ( reportProgress )
    .on ( 'data', ( d ) => console.log ( 'reportProgress : ', d ) )
    .pipe ( process.stdout );

// commaSplitter :  [ 'a', 'b', 'c', 'd' ]
// arrayToObject :  {"a":"b","c":"d"}
// .reportProgress :  {"a":"b","c":"d"}
// {"a":"b","c":"d"}

console.log ( 'eF :', Ini.SM () );