const { PassThrough, Writable, Stream, Duplex, Transform, Readable } = require ( 'stream' );
const docStream = require ( 'stream' );
const pass = new PassThrough ();

class MyWritable extends Writable {
    constructor () {
        super ();
    }

    _write ( chunk, encoding, callback ) {
        console.log ( chunk );
        debugger;
        callback ();
    }
}

const writable = new MyWritable ();

writable.on ( 'close', ( args ) => {
    const close = { close: args };// args undefined
    console.log ( 'Is res close', close);
    debugger;
} );

writable.on ( 'drain', ( args ) => {
    const drain = { drain: args };// ??
    console.log ( 'Is res drain', drain );
    debugger;
} );

writable.on ( 'finish', ( args ) => {
    const finish = { finish: args };// args undefined
    console.log ( 'Is res finish' ,finish);
    debugger;
} );

writable.on ( 'pipe', ( args ) => {
    const pipe = { pipe: args };// args = close: IncomingMessage
    console.log ( 'Is res pipe', pipe );
    debugger;
} );

writable.on ( 'unpipe', ( args ) => {
    const unpipe = { pipe: args };// args = close: IncomingMessage
    console.log ( 'Is res unpipe', unpipe );
    debugger;
} );
debugger;
writable.write ( 'Stat' ); // console : Buffer(4) [83, 116, 97, 116]
writable.end (); // emit 'finish';

