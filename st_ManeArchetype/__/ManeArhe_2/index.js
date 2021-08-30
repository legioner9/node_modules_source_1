const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );
debugger
const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, debLog: false, logFs: false, stack: false};

const Func_examp = inj => {

    // BOUNDEN CALL define inner Env
    const Env = arht_fm.at ( Func_examp );

    // inner INSTRUMENTS fore construction:

    Func_examp.l_log ( Env.MODE, 'work Func_examp.l_log' );
    Func_examp.l_deb ( Env.MODE );
    Func_examp.l_log_deb ( Env.MODE, 'work Func_examp.l_log_deb and far debug' );
    Func_examp.l_fsLog ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    Func_examp.dirDeepOptions ( { a: 'aa' } );
    Func_examp.l_stack ( Env.MODE, 'work Func_examp.l_stack' );

    // internal event report (envelope_out to recipient signer 'boom_boom')
    Func_examp.event.emit ( 'boom_boom', 'envelope_out to recipient signer \'boom_boom\')))' );

    // external event listener ( envelope from sender 'data to Func_examp')
    Func_examp.event.on ( 'data to Func_examp', envelope_in => envelope_in );

    // BODY OF FUNCTION
    console.log ( 'Run Func_examp------------' );

    // inject code
    inj ();
};

// BOUNDEN CALL
arht_fm.prop ( Func_examp );
arht_fm.out ( Func_examp );

debugger;

// // event report out (export from) Func_examp:
//
// Func_examp.event.once ( '_start', function ( ENV ) {
//     Func_examp.dirDeepOptions ( ENV );
// }, Func_examp );
//
// Func_examp.event.once ( '_innerState', function ( innerState ) {
//     Func_examp.dirDeepOptions ( innerState );
// }, Func_examp );
//
// // define report behaviour :
//
// Func_examp.mode.log = true;
// Func_examp.mode.deb = true;
// Func_examp.mode.debLog = true;
// Func_examp.mode.logFs = true;
//
// // BOUNDEN CALL define root_path
// arht_fm.before ( Func_examp, module );
//
// Func_examp ();
//
// // AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// Func_examp.event.emit ( '_externalState', '__blob' ); // exterState: "__blob"
//
// debugger

module.exports = Func_examp;
