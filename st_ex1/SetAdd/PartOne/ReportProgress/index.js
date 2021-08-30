const TSTR = require ( 'stream' ).Transform;

const reportProgress = new TSTR ( {
                                      readableObjectMode: true,
                                      writableObjectMode: true,
                                      transform ( chunk, encoding, callback ) {
                                          console.log( '.' );
                                          callback ( null, chunk );
                                      }
                                  } );
reportProgress.help = `ModuleFunc = () => {}`;

reportProgress.call = () => console.log ( reportProgress );

module.exports = reportProgress;