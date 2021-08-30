const Ex = require ( 'st_ex1' );

const wrOn = Ex.SetStream.CombinStream.mWriteReadOn;
const { wOn, rOn } = wrOn ();
const rs = new ( require ( 'stream' ).Readable );
const ws = new ( require ( 'stream' ).Writable );

rOn ( rs, 'i' );
rOn ( rs, 'q' );
wOn ( ws, 'r' );
wOn ( ws, 'y' );
debugger;