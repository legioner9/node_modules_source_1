const {Readable, Writable, Transform, pipeline} = require('stream');

stream.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );

pipeline(
    rfs,
    mwfs,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);