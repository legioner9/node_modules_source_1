const Ex = require ( 'st_ex1' );
const drs = new Ex.SetStream.DebugReadStream ();
const reon = Ex.SetStream.ReadAllOn;
console.log ( reon.help );
reon ( drs );
debugger;
drs.destroy ( new Error ( 'Test destroy' ) ); // console : {errMess: "Test destroy"}
// emit 'close'
drs.push('990' , ()=>{
    
});
debugger;
