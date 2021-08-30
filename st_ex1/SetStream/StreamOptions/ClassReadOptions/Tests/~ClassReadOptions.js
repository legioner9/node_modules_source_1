const Ex = require ( 'st_ex1' );
const Rropt = Ex.SetStream.StreamOptions.ClassReadOptions;
const rropt = new Rropt ();
// console.log ( Wropt.help );

const Rr = require ( 'stream' ).Readable;
const rr = new Rr ( rropt );
debugger;