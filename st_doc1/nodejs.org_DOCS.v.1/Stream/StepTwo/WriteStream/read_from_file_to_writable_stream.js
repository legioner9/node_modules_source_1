const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );

const fs_read = fs.createReadStream ( __dirname + '\\for_read.txt', 'utf-8' );
fs_read.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );

const outStream = new Writable ( {
                                     write ( chunk, encoding, callback ) {
                                         console.log ( chunk.toString () );
                                         callback ();
                                     }
                                 } );

// process.stdin.pipe ( outStream );
pipeline (
    fs_read,
    outStream,
    ( err ) => {
        if ( err ) {
            console.error ( 'Pipeline failed.', err );
        }
        else {
            console.log ( 'Pipeline succeeded.' );
        }
    }
);