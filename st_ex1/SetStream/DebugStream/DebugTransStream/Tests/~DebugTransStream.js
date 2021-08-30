const Ex = require ( 'st_ex1' );
const dts = new Ex.SetStream.DebugTransStream ();
// const reon = Ex.SetStream.ReadAllOn;
// console.log ( reon.help );
// reon ( dts );
debugger;
dts.destroy ( new Error ( 'Test destroy' ) ); // console : {errMess: "Test destroy"}
// emit 'close'
dts.push('990' , ()=>{
    
});
debugger;
