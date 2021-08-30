const { PassThrough, Writable, Stream, Duplex, Transform, Readable } = require ( 'stream' );
const docStream = require ( 'stream' );
const pass = new PassThrough ();

const writable = new Writable ();

writable.on ( 'close', ( args ) => {
    const rs_c = { close: args };// args undefined
    console.log ( 'Is res close' );
    debugger;
} );

writable.on ( 'drain', ( args ) => {
    const rs_c = { drain: args };// ??
    console.log ( 'Is res drain' );
    debugger;
} );

writable.on ( 'finish', ( args ) => {
    const rs_c = { finish: args };// args undefined
    console.log ( 'Is res finish' );
    debugger;
} );

writable.on ( 'pipe', ( args ) => {
    const rs_c = { pipe: args };// args = close: IncomingMessage
    console.log ( 'Is res pipe' );
    debugger;
} );

debugger;
writable.write ( 'Stat' ); //The _write() method is not implemented
writable.end (); // emit 'finish';

