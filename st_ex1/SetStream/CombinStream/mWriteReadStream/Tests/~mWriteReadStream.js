const Ex = require ( 'st_ex1' );
const mWRS = Ex.SetStream.CombinStream.mWriteReadStream;
console.log ( mWRS.help );
const mStreams = Ex.SetStream.CombinStream.mWriteReadStream ( [ [ 1, 777 ] ], [ [ 2, '000' ] ] );
debugger;
