const {Readable, Writable, Transform, pipeline} = require('stream');

const outStream = new Writable ( {
                                     write ( chunk, encoding, callback ) {
                                         console.log ( chunk.toString () );
                                         callback ();
                                     }
                                 } );

// process.stdin.pipe ( outStream );
pipeline(
    process.stdin,
    outStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);