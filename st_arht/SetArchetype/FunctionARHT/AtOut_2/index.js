const EventEmitter = require ( 'events' );

const Ini_deep = require ( 'st_ini_deep1' );

const { l_log, l_deb, l_log_deb, l_fsLog, dirDeepOptoins } = Ini_deep;

// l_fsLog ( dev, 'String\n' , __dirname,[ 'fsLog_1', 'log_1.md']);

// const L_log = (dev, ... args) => {
//     if ( dev.log ) console.log(... args);
// };
//
// const L_log_deb = ( dev, ...args ) => {
//     if ( dev.log ) console.log ( ...args );
//     if ( dev.deb ) debugger;
// };
//
// const L_deb = ( dev ) => {
//     if ( dev.deb ) debugger;
// };

const ModuleFunc = ( x, opt = false ) => {

    // define Development MODE
    const MODE = ModuleFunc.mode;

    // define EVENT
    const EVENT = ModuleFunc.event;

    // define MODULE
    const MODULE = ModuleFunc.module;

    // define PRESET
    const PRESET = ModuleFunc.preset;

    // InnerState reports
    EVENT.emit ( 'start ModuleFunc', d = 'IS: start ModuleFunc' );
    EVENT.emit ( 'point_1 ModuleFunc', d = 'IS: point_1 ModuleFunc' );
    EVENT.emit ( 'end ModuleFunc', d = 'IS: end ModuleFunc' );

    // subscription to initiate
    EVENT.on ( 'init ModuleFunc', ( d = '' ) => {

        dirDeepOptoins ( MODE );
    } );

    // Trigger image-console.log
    // EVENT.on ( 'case_1', ( ...args ) => {} );
    EVENT.on ( 'init case_1', ( ...args ) => console.log ( ...args ) );

    // quite needful this:
    if ( MODE.stack ) console.log ( `ModuleFunc is RUN` );
    l_log ( MODE, 'that stdout' ); // if stdout
    l_deb ( MODE ); // if debug
    l_log_deb ( MODE, 'that stdout and debug' ); // if stdout and debug
    //  __dirname, [ 'fsLog_1', 'log_1.md' ] is DEFAULT value
    l_fsLog ( MODE, 'Info for log file\n', MODULE.path, [ 'fsLog_1', 'log_1.md' ] );

    // Body of Func
    console.log ( ' RUN ^func_v_1_test_1 and DO SOMETHING __------^^^^^' );

};

ModuleFunc.help = `ModuleFunc = () => {}`;

ModuleFunc.call = () => console.log ( ModuleFunc );

ModuleFunc.mode = { deb: false, log: false, logFs: false, stack: false };

ModuleFunc.event = new EventEmitter;

ModuleFunc.module = {};

ModuleFunc.preset = {};

// for example
const func_v_1_test_1 = () => {};
// set behavior ModuleFunc in runtime

func_v_1_test_1.mode = { deb: false, log: false, logFs: true, stack: false };
func_v_1_test_1.module = module;
func_v_1_test_1.preset = {};
// subscription to reports on ModuleFunc
// func_v_1_test_1.event.on ( 'start fn', d => console.log ( d ) );
// func_v_1_test_1.event.on ( 'point_1 fn', d => console.log ( d ) );
// func_v_1_test_1.event.on ( 'end fn', d => console.log ( d ) );

// func_v_1_test_1 InitState reports
// func_v_1_test_1.event.emit ('init ModuleFunc', d = [__dirname])

// func_v_1_test_1 Case_1 reports NB! only after first
// func_v_1_test_1.event.emit ( 'init case_1', 'first' ); // not Run
// func_v_1_test_1 ();
// func_v_1_test_1.event.emit ( 'init case_1', 'second' );
// func_v_1_test_1 ();

const AtOut_2 = {};

AtOut_2.prop = fn => {

    fn.dirDeepOptoins = dirDeepOptoins;

    fn.l_log = l_log;
    fn.l_deb = l_deb;
    fn.l_log_deb = l_log_deb;
    fn.l_fsLog = l_fsLog;

};


AtOut_2.at = fn => {

    // define Development MODE
    const MODE = fn.mode;

    // define EVENT
    const EVENT = fn.event;

    // define MODULE
    const MODULE = fn.module;

    // define PRESET
    const PRESET = fn.preset;

    return {MODE,EVENT,MODULE,PRESET}
};


AtOut_2.at_set1 = fn => {
    const { l_log, l_deb, l_log_deb, l_fsLog, dirDeepOptoins } = require ( 'st_ini_deep1' );

    // define Development MODE
    const MODE = fn.mode;

    // define EVENT
    const EVENT = fn.event;

    // define MODULE
    const MODULE = fn.module;

    // define PRESET
    const PRESET = fn.preset;

    // InnerState reports
    EVENT.emit ( 'start fn', d = 'IS: start fn' );
    EVENT.emit ( 'point_1 fn', d = 'IS: point_1 fn' );
    EVENT.emit ( 'end fn', d = 'IS: end fn' );

    // subscription to initiate
    EVENT.on ( 'init fn', ( d = '' ) => {

        dirDeepOptoins ( MODE );
    } );

    // Trigger image-console.log
    // EVENT.on ( 'case_1', ( ...args ) => {} );
    EVENT.on ( 'init case_1', ( ...args ) => console.log ( ...args ) );

    // quite needful this:
    if ( MODE.stack ) console.log ( `fn is RUN` );
    l_log ( MODE, 'that stdout' ); // if stdout
    l_deb ( MODE ); // if debug
    l_log_deb ( MODE, 'that stdout and debug' ); // if stdout and debug
    //  __dirname, [ 'fsLog_1', 'log_1.md' ] is DEFAULT value
    l_fsLog ( MODE, 'Info for log file\n', MODULE.path, [ 'fsLog_1', 'log_1.md' ] );

    // Body of Func
    l_log ( MODE, ' RUN ^func_v_1_test_1 and DO SOMETHING __------^^^^^' );

};

AtOut_2.out = (fn , init_module = 'empty')=> {
    const EventEmitter = require ( 'events' );

    fn.help = `ModuleFunc = () => {}`;

    fn.call = () => console.log ( ModuleFunc );

    fn.mode = { deb: false, log: false, logFs: false, stack: false };

    fn.event = new EventEmitter;

    fn.module = init_module;

    fn.preset = {};
};

AtOut_2.test = {};

AtOut_2.test.logFs = ( fn ) => {

    // set behavior ModuleFunc in runtime
    fn.mode = { deb: false, log: false, logFs: true, stack: false };
    fn.module = module;
    fn.preset = {};
// subscription to reports on ModuleFunc
    fn.event.once ( 'start fn', d => console.log ( d ) );
    fn.event.once ( 'point_1 fn', d => console.log ( d ) );
    fn.event.once ( 'end fn', d => console.log ( d ) );

// func_v_1_test_1 InitState reports
// func_v_1_test_1.event.emit ('init ModuleFunc', d = [__dirname])

// func_v_1_test_1 Case_1 reports NB! only after first
    fn.event.emit ( 'init case_1', 'first' ); // not Run
    fn ();
    fn.event.emit ( 'init case_1', 'second' );
    fn ();

};

AtOut_2.test.log = ( fn ) => {

    // set behavior ModuleFunc in runtime
    fn.mode = { deb: false, log: true, logFs: false, stack: false };
    fn.module = module;
    fn.preset = {};
// subscription to reports on ModuleFunc
    fn.event.once ( 'start fn', d => console.log ( d ) );
    fn.event.once ( 'point_1 fn', d => console.log ( d ) );
    fn.event.once ( 'end fn', d => console.log ( d ) );

// func_v_1_test_1 InitState reports
// func_v_1_test_1.event.emit ('init ModuleFunc', d = [__dirname])

// func_v_1_test_1 Case_1 reports NB! only after first
    fn.event.emit ( 'init case_1', 'first' ); // not Run
    fn ();
    fn.event.emit ( 'init case_1', 'second' );
    fn ();

};

AtOut_2.help = `AtOut_1.at = fn => {
    const { l_log, l_deb, l_log_deb, l_fsLog, dirDeepOptoins } = require ( 'st_ini_deep1' );

    // define Development MODE
    const MODE = fn.mode;

    // define EVENT
    const EVENT = fn.event;

    // define MODULE
    const MODULE = fn.module;

    // define PRESET
    const PRESET = fn.preset;

    // InnerState reports
    EVENT.emit ( 'start fn', d = 'IS: start fn' );
    EVENT.emit ( 'point_1 fn', d = 'IS: point_1 fn' );
    EVENT.emit ( 'end fn', d = 'IS: end fn' );

    // subscription to initiate
    EVENT.on ( 'init fn', ( d = '' ) => {

        dirDeepOptoins ( MODE );
    } );

    // Trigger image-console.log
    // EVENT.on ( 'case_1', ( ...args ) => {} );
    EVENT.on ( 'init case_1', ( ...args ) => console.log ( ...args ) );

    // quite needful this:
    if ( MODE.stack ) console.log ( \`fn is RUN\` );
    l_log ( MODE, 'that stdout' ); // if stdout
    l_deb ( MODE ); // if debug
    l_log_deb ( MODE, 'that stdout and debug' ); // if stdout and debug
    //  __dirname, [ 'fsLog_1', 'log_1.md' ] is DEFAULT value
    l_fsLog ( MODE, 'Info for log file\\n', MODULE.path, [ 'fsLog_1', 'log_1.md' ] );

    // Body of Func
    l_log ( MODE, ' RUN ^func_v_1_test_1 and DO SOMETHING __------^^^^^' );

};

AtOut_1.out = fn => {
    const EventEmitter = require ( 'events' );

    fn.help = \`ModuleFunc = () => {}\`;

    fn.call = () => console.log ( ModuleFunc );

    fn.mode = { deb: false, log: false, logFs: false, stack: false };

    fn.event = new EventEmitter;

    fn.module = {};

    fn.preset = {};
};`;

module.exports = AtOut_2;
