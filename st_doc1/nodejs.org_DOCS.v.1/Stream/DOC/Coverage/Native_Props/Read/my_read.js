const { PassThrough, Writable, Stream, Duplex, Transform, Readable } = require ( 'stream' );
const docStream = require ( 'stream' );
const pass = new PassThrough ();
const readable = new MyReadable ();

class MyReadable extends Readable {
    constructor () {
        super ();
    }

    _read ( size ) {
    }

}

readable.on ( 'data', ( args ) => {
    const data = { data: args };// args = close: IncomingMessage
    console.log ( 'Is res data', data );
    debugger;
} );

readable.on ( 'readable', ( args ) => {
    const readable = { readable: args };// args = close: IncomingMessage
    console.log ( 'Is res readable', readable );
    debugger;
} );

readable.on ( 'end', ( args ) => {
    const end = { end: args };// args = close: IncomingMessage
    console.log ( 'Is res end', end );
    debugger;
} );

readable.on ( 'error', ( args ) => {
    const error = { error: args };// args = close: IncomingMessage
    console.log ( 'Is res end', error );
    debugger;
} );

readable.on ( 'close', ( args ) => {
    const close = { close: args };// args = close: IncomingMessage
    console.log ( 'Is res end', close );
    debugger;
} );



debugger;