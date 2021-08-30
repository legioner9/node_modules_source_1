const wr = new ( require ( 'stream' ).Writable );
const Ex = require ( 'st_ex1' );
const waon = Ex.SetStream.WriteAllOn;
console.log ( waon.help );
waon ( wr );
debugger;