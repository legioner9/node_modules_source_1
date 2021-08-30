const Ex = require ( 'st_ex1' );
const dds = new Ex.SetStream.DebugDuplStream ();
// const reon = Ex.SetStream.ReadAllOn;
// console.log ( reon.help );
// reon ( dts );
debugger;
dds.destroy ( new Error ( 'Test destroy' ) ); // console : {errMess: "Test destroy"}
// emit 'close'
dds.push('990' , ()=>{
    
});
debugger;
