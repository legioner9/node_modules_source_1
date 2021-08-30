const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );

const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, debLog: false, logFs: false, stack: false};

const Func_examp = path => {

    // BOUNDEN CALL define inner Env
    const Env = arht_fm.at ( Func_examp );

    // inner INSTRUMENTS fore construction:

    // Func_examp.l_log ( Env.MODE, 'work Func_examp.l_log' );
    const inj_log = string => {
        Func_examp.l_log ( Env.MODE, string );
    };

    // Func_examp.l_deb ( Env.MODE );
    const inj_deb = () => {
        Func_examp.l_deb ( Env.MODE );
    };

    // Func_examp.l_log_deb ( Env.MODE, 'work Func_examp.l_log_deb and far debug' );
    const inj_log_deb = string => {
        Func_examp.l_log_deb ( Env.MODE, string );
    };

    // Func_examp.l_fsLog ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    const inj_fsLog = string => {
        Func_examp.l_fsLog ( Env.MODE, string, Env.MODULE.path );
    };

    // Func_examp.l_fsLogErr ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    const inj_fsLogErr = string => {
        Func_examp.l_fsLogErr ( Env.MODE, string, Env.MODULE.path );
    };

    // Func_examp.dirDeepOptions ( { a: 'aa' } );
    const inj_console_obj = obj => {
        Func_examp.dirDeepOptions ( obj );
    };

    // Func_examp.l_stack ( Env.MODE, 'work Func_examp.l_stack' );
    const inj_stack = string => {
        Func_examp.l_stack ( Env.MODE, string );
    };

    // internal event report (envelope_out to recipient signer 'boom_boom')
    // Func_examp.event.emit ( 'boom_boom', 'envelope_out to recipient signer \'boom_boom\')))' );
    const inj_send = ( event_name, data_to_send ) => {
        Func_examp.event.emit ( event_name, data_to_send );
    };

    // external event listener ( envelope from sender 'data to Func_examp')
    // Func_examp.event.on ( 'data to Func_examp', envelope_in => envelope_in );
    const inj_listen = ( event_name, cb_listener ) => {
        Func_examp.event.on ( event_name, cb_listener );
    };

    const inj_listen_ce = ( event_name_ce, cb_listener_ce ) => {
        Func_examp.event.once ( event_name_ce, cb_listener_ce );
    };

    const inj = {
        log: inj_log,
        deb: inj_deb,
        log_deb: inj_log_deb,
        fsLog: inj_fsLog,
        fsLogErr: inj_fsLogErr,
        console_obj: inj_console_obj,
        stack: inj_stack,
        send: inj_send,
        listen: inj_listen,
        listen_ce: inj_listen_ce,
    };

    // inj_log = string => {
    // inj_deb = () => {
    // inj_log_deb = string => {
    // inj_fsLog = string => {
    // inj_fsLogErr = string => {
    // inj_console_obj = obj => {
    // inj_stack = string => {
    // inj_send = ( event_name, data_to_send ) => {
    // inj_listen = (event_name , cb_listener) =>{
    // inj_listen_ce = (event_name_ce , cb_listener_ce) =>{
    //
    // BODY OF FUNCTION
    // console.log ( 'Run Func_examp------------' );

    //--------------------------------------------------------------
    // PRE Function
    // inj_log ( 'work inj_log' );
    // inj_deb ();
    // inj_log_deb ( 'work inj_log_deb' );
    // inj_fsLog ( 'work inj_fsLog once' );
    // inj_fsLog ( 'work inj_fsLog twice' );
    // inj_fsLogErr ( 'work inj_fsLogErr once' );
    // inj_fsLogErr ( 'work inj_fsLogErr twice' );
    // inj_console_obj ( { a: 'inj_console_obj -------a------' } );
    // inj_stack ( 'work inj_stack' );
    // inj_send ( 'send_from_func', 'content to send_from_func' );
    // inj_listen ( 'send_to_func', d => console.log ( ' send_to_func = ', d ) );
    // inj_listen_ce ( 'send_to_func_ce', d => console.log ( ' send_to_func_ce = ', d ) );

    //--------------------------------------------------------------
    // THIS Function

    const Fs = require ( 'fs' );

    try {
        inj_deb ();
        const stats = Fs.statSync ( path );

        inj_fsLog ( `
    RUN > stats.isFile  with:,
    path = ${ path },
    content = ${ JSON.stringify ( stats ) } 
    ` );
        inj_log ( 'Fs.writeFileSync', path, stats );
        if (stats.isFile ()){
            Fs.unlinkSync(path)
        }
        else {
            inj_log ('it s not file', path)
        }
    }
    catch (err) {

        inj_deb ();
        inj_fsLogErr ( `
    RUN > stats.isFile catch (err) with:,
    path = ${ path },
    err = ${ JSON.stringify ( err ) }
    ` );
        inj_log ( 'Fs.statSync', path, err );
        console.error ( err );
        return false;

    }

    //--------------------------------------------------------------

};

// BOUNDEN CALL
arht_fm.prop ( Func_examp );
arht_fm.out ( Func_examp );

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
