const WritableOptions = {
    highWaterMark: 16384,
    decodeStrings: true,
    defaultEncoding: 'utf8',
    objectMode: false,
    emitClose: true,
    write ( chunk, encoding, callback ) {
        console.log ( 'WC write', { chunk, encoding } );
        callback ();
    },
    writev ( chunks, callback ) {
        console.log ( 'WC writev', { chunks } );
        callback ();
    },
    destroy ( error, callback ) {
        console.log ( 'WC destroy', { error } );
        callback ();
    },
    final ( callback ) {
        console.log ( 'WC final' );
        callback ();
    },

    autoDestroy: 'boolean',
};

const STR = require ( 'stream' );

const wr = new STR.Writable ( WritableOptions );

wr.on ( 'close', () => {
    console.log ( 'WE close' );
} );

wr.on ( 'drain', () => {
    console.log ( 'WE drain' );
} );

wr.on ( 'finish', () => {
    console.log ( 'WE finish' );
} );

wr.on ( 'pipe', ( src ) => {
    const pipe = { pipe: src };
    console.log ( 'WE pipe', pipe );
} );

wr.on ( 'unpipe', ( src ) => {
    const unpipe = { unpipe: src };
    console.log ( 'WE unpipe', unpipe );
} );

wr.on ( 'error', ( err ) => {
    const error = { err };
    console.log ( 'WE error', error );
} );

debugger;
wr.write ( 'any1', ( error ) => console.log ( 'write1', error ) );//: boolean;
wr.write ( 'any2', 'utf8', ( error ) => console.log ( 'write2', error ) );//: boolean;
wr.setDefaultEncoding ( 'utf8' );//: this;
wr.end ( () => console.log ( 'end1' ) );
wr.end ( 'any3', () => console.log ( 'end2' ) );
wr.end ( 'any4', 'utf8', () => console.log ( 'end3' ) );
wr.cork ();
wr.uncork ();
wr.destroy ( new Error ( 'destroying' ) );