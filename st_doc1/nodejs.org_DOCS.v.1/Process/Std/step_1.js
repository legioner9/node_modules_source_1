const request = require ( 'request' );
const fs = require ( 'fs' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

const fs_wr = fs.createWriteStream ( __dirname + '\\file.html', 'utf-8', e => {
    if ( e ) console.log ( e );
} );
request ( 'https://fettblog.eu' ).pipe ( process.stdout );
const req_a = request ( 'https://fettblog.eu' );

pipeline (
    req_a,
    fs_wr,
    ( err ) => {
        if ( err ) {
            console.error ( 'Pipeline failed.', err );
        }
        else {
            console.log ( 'Pipeline succeeded.' );
        }
    }
);


