const Ex = require ( 'st_ex1' );
const Wropt = Ex.SetStream.StreamOptions.ClassWriteOptions;
const wropt = new Wropt ();
// console.log ( Wropt.help );

const Wr = require ( 'stream' ).Writable;
const wr = new Wr ( wropt );
debugger;