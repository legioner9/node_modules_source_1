const { PassThrough, Writable, Stream, Duplex, Transform, Readable } = require ( 'stream' );
const docStream = require ( 'stream' );
const pass_ = new PassThrough ();
const pass = new Transform() ;
const writable = new Writable ();

// pass.pipe ( writable ); // readableFlowing: true
// pass.unpipe ( writable ); // readableFlowing: false

pass.write ( 'ok' );

pass.push ( 'ok3' );

// console :
// [ERR_METHOD_NOT_IMPLEMENTED]: The _transform() method is not implemented