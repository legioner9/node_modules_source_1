const Ex = require ( 'st_ex1' );
const Dropt = Ex.SetStream.StreamOptions.ClassDuplOptions;
const dropt = new Dropt ();
console.log ( Dropt.help );

const Dr = require ( 'stream' ).Duplex;
const dr = new Dr ( dropt );

debugger;