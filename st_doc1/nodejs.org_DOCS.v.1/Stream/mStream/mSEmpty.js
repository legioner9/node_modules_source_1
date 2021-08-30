const STR = require ( 'stream' );
const Ex = require ( 'st_ex1' );
const Wropt = Ex.SetStream.StreamOptions.ClassWriteOptions;

const wropt = new Wropt ();
const waon = Ex.SetStream.StreamAllOn.WriteAllOn;
console.log ( waon.help );


const Rropt = Ex.SetStream.StreamOptions.ClassReadOptions;
const rropt = new Rropt ();
const raon = Ex.SetStream.StreamAllOn.ReadAllOn;
console.log ( raon.help );

const wr = new STR.Writable ( wropt );
waon ( wr );
const rr = new STR.Readable ( rropt );
raon ( rr );
debugger;