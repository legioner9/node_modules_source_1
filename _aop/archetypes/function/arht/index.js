const { _require } = require ( 'st_require' );
const events = require ( 'events' ).EventEmitter;

const arht = {};

arht.env = fn => {

    // define Development MODE

    const DEV = fn.dev;

    const MODE = fn.mode;

    // define EVENT
    const EVENT = fn.event;

    // define MODULE
    const MODULE = fn.module;

    // define PRESET
    const PRESET = fn.preset;

    const EXTER = fn.exterState;

    const INNER = fn.innerState;

    const STACK = fn.stack;

    const EXIT = fn.exit;

    const UTEST = fn.utest;

    const ERR = fn.err;

    const WARN = fn.warn;

    // start signal of fn
    // fn.event.emit ( '_start', ENV );

    // push innerState - example ENV:
    // fn.event.emit ( '_innerState', fn.innerState );

    // pull externalState
    // fn.event.on ( '_externalState', d => { // d typeof Object
    //     fn.exterState = d;
    // } );

    // define Development MODE

    return {
        DEV,
        MODE,
        EVENT,
        MODULE,
        PRESET,
        EXTER,
        INNER,
        STACK,
        EXIT,
        UTEST,
        ERR,
        WARN,
    };
};

arht.property = ( fn ) => {

    fn.help = `ModuleFunc = () => {}`;

    fn.mode = {
        deb: false,
        log: false,
        debLog: false,
        logFs: false,
    };

    fn.stack = false;

    // migrate to AtOut_fm.path
    // fn.module = init_module;

    fn.preset = {};

    fn.exterState = {};

    fn.innerState = {};

    fn.dev = false;

    fn.exit = false;

    fn.utest = false;

    fn.err = true;

    fn.warn = false;
};

arht.methods = fn => {

    const EventEmitter = require ( 'events' ).EventEmitter;
    fn.event = new EventEmitter;

    const { l_log, l_deb, l_log_deb, l_fsLog, l_fsLogErr, l_stack, dirDeepOptions } = _require ( 'st_ini_deep1_' );

    fn.dirDeepOptions = dirDeepOptions;

    fn.l_log = l_log;
    fn.l_deb = l_deb;
    fn.l_log_deb = l_log_deb;
    fn.l_fsLog = l_fsLog;
    fn.l_fsLogErr = l_fsLogErr;
    fn.l_stack = l_stack;

    fn.call = () => console.log ( fn );

};

arht.module = ( fn, init_module = 'empty' ) => {
    fn.module = init_module;
};

arht.utils = fn => {

    const Env = arht.env ( fn );
    const _log = string => {
        fn.l_log ( Env.MODE, string );
    };

    // Func_examp.l_deb ( Env.MODE );
    const _deb = () => {
        fn.l_deb ( Env.MODE );
    };

    // Func_examp.l_log_deb ( Env.MODE, 'work Func_examp.l_log_deb and far debug' );
    const _log_deb = string => {
        fn.l_log_deb ( Env.MODE, string );
    };

    // Func_examp.l_fsLog ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    const _fsLog = string => {
        fn.l_fsLog ( Env.MODE, string, Env.MODULE.path );
    };

    // Func_examp.l_fsLogErr ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    const _fsLogErr = string => {
        fn.l_fsLogErr ( Env.MODE, string, Env.MODULE.path );
    };

    // Func_examp.dirDeepOptions ( { a: 'aa' } );
    const _console_obj = obj => {
        fn.dirDeepOptions ( obj );
    };

    // Func_examp.l_stack ( Env.MODE, 'work Func_examp.l_stack' );
    const _stack = string => {
        fn.l_stack ( fn, string );
    };

    // internal event report (envelope_out to recipient signer 'boom_boom')
    // Func_examp.event.emit ( 'boom_boom', 'envelope_out to recipient signer \'boom_boom\')))' );
    const _emit = ( event_name, data_to_send ) => {
        fn.event.emit ( event_name, data_to_send );
    };

    // external event listener ( envelope from sender 'data to Func_examp')
    // Func_examp.event.on ( 'data to Func_examp', envelope_in => envelope_in );
    const _on = ( event_name, cb_listener ) => {
        fn.event.on ( event_name, cb_listener );
    };

    const _once = ( event_name_ce, cb_listener_ce ) => {
        fn.event.once ( event_name_ce, cb_listener_ce );
    };
    return {
        _log,
        _deb,
        _log_deb,
        _fsLog,
        _fsLogErr,
        _console_obj,
        _stack,
        _emit,
        _on,
        _once,
    };
};
arht.layer_x = {};

module.exports = arht;
