// const WritableOptions = {
//     highWaterMark: 16384,
//     decodeStrings: true,
//     defaultEncoding: 'utf8',
//     objectMode: false,
//     emitClose: true,
//     write ( chunk, encoding, callback ) {
//         console.log ( 'WC write', { chunk, encoding } );
//         callback ();
//     },
//     writev ( chunks, callback ) {
//         console.log ( 'WC writev', { chunks } );
//         callback ();
//     },
//     destroy ( error, callback ) {
//         console.log ( 'WC destroy', { error } );
//         callback ();
//     },
//     final ( callback ) {
//         console.log ( 'WC final' );
//         callback ();
//     },
//
//     autoDestroy: 'boolean',
// };

// const STR = require ( 'stream' );

// const wr = new STR.Writable ( WritableOptions );
//
// wr.on ( 'close', () => {
//     console.log ( 'WE close' );
// } );
//
// wr.on ( 'drain', () => {
//     console.log ( 'WE drain' );
// } );
//
// wr.on ( 'finish', () => {
//     console.log ( 'WE finish' );
// } );
//
// wr.on ( 'pipe', ( src ) => {
//     const pipe = { pipe: src };
//     console.log ( 'WE pipe', pipe );
// } );
//
// wr.on ( 'unpipe', ( src ) => {
//     const unpipe = { unpipe: src };
//     console.log ( 'WE unpipe', unpipe );
// } );
//
// wr.on ( 'error', ( err ) => {
//     const error = { err };
//     console.log ( 'WE error', error );
// } );
const STR = require ( 'stream' );
const Ex = require ( 'st_ex1' );
const Rropt = Ex.SetStream.StreamOptions.ClassReadOptions;
const rropt = new Rropt ();
const raon = Ex.SetStream.StreamAllOn.ReadAllOn;
console.log ( raon.help );

const rr = new STR.Readable ( rropt );
raon ( rr );
debugger;

rr.push ( 'RR any1', 'utf8' );//: boolean;
rr.unshift ( 'RR any2', 'utf8' );//: boolean;
rr.setEncoding ( 'utf8' );//: this;
rr.read ( 999 );
rr.pause ();
rr.resume ();
rr.isPaused ();
rr.unpipe ( 'destination' );
rr.wrap ( 'oldStream' );
rr.destroy ( new Error ( 'RR destroying' ) );