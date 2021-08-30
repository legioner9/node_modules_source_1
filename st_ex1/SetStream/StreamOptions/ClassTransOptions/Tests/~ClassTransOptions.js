const Ex = require ( 'st_ex1' );
const Tropt = Ex.SetStream.StreamOptions.ClassTransOptions;
const tropt = new Tropt ();
console.log ( Tropt.help );

const Tr = require ( 'stream' ).Transform;
const tr = new Tr ( tropt );

debugger;