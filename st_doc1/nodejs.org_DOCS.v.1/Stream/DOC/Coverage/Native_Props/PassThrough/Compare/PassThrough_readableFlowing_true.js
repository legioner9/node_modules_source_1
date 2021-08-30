const { PassThrough, Writable, Stream, Duplex, Transform, Readable } = require ( 'stream' );
const docStream = require ( 'stream' );
const pass = new PassThrough ();
const writable = new Writable ();
// pass readableFlowing: null
pass.pipe ( writable ); // readableFlowing: true
pass.unpipe ( writable ); // readableFlowing: false
// readableFlowing is now false.
// => emit 'data' unable =>  console.log unable

pass.on ( 'data', ( chunk ) => { console.log ( chunk.toString () ); } );
// pass readableFlowing: false
// console.log unable

pass.write ( 'ok' );
// Will not emit 'data'.
// pass readableFlowing: false

// buffer: BufferList
//  head:
//   data: Buffer(2) [111, 107]
//    next: null

pass.write ( 'ok2' );
// Will not emit 'data'.
// pass readableFlowing: false

// <Cascading iterate>:
// buffer: BufferList
//  head:
//   data: Buffer(2) [111, 107]
//    next:
//     data: Buffer(3) [111, 107, 50]
//      next: null


pass.resume (); // able emit 'data' !
// Must be called to make stream emit 'data'.
// pass readableFlowing: true
// <Cascading iterate>:
// buffer: BufferList
//  head:
//   data: Buffer(2) [111, 107]
//    next:
//     data: Buffer(3) [111, 107, 50]
//      next: null

// pass.on ( 'data', ( chunk ) => { console.log ( chunk.toString () ); } );

pass.push ( 'ok3' );

// buffer: BufferList
//  head:
//   data: Buffer(2) [111, 107]
//    next:
//     data: Buffer(3) [111, 107, 50]
//      next:
//       data: Buffer(3) [111, 107, 51]
//        next: null

// console :
// ok ok1 ok2