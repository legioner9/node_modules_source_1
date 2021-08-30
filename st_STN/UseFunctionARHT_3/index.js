// const EventEmitter = require ( 'events' );
//
// const Ini_deep = require ( 'st_ini_deep1' );
//
// const { l_log, l_deb, l_log_deb, l_fsLog, dirDeepOptoins } = Ini_deep;

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

// const Mkdir_1 = ( x, opt = false ) => {
//     // define Development MODE
//     const MODE = Mkdir_1.mode;
//
//     // define EVENT
//     const EVENT = Mkdir_1.event;
//
//     // InnerState reports
//     EVENT.emit ( 'start Mkdir_1', d );
//     EVENT.emit ( 'point Mkdir_1', d );
//     EVENT.emit ( 'end Mkdir_1', d );
//
//     // subscription to initiate
//     EVENT.on ( 'init Mkdir_1', ( d ) => {
//
//         dirDeepOptoins ( MODE );
//     } );
//     EVENT.on ( 'case_1', ( ...args ) => {} );
//
//     // quite needful this:
//     if ( MODE.stack ) console.log ( `ModuleFunc is RUN` );
//     l_log ( MODE, 'that stdout' ); // if stdout
//     l_deb ( MODE ); // if debug
//     l_log_deb ( MODE, 'that stdout and debug' ); // if stdout and debug
//     //  __dirname, [ 'fsLog_1', 'log_1.md' ] is DEFAULT value
//     l_fsLog ( MODE, 'Info for log file\n', __dirname, [ 'fsLog_1', 'log_1.md' ] );
//
// };
//
// Mkdir_1.help = `ModuleFunc = () => {}`;
//
// Mkdir_1.call = () => console.log ( Mkdir_1 );
//
// Mkdir_1.mode = { deb: false, log: false, logFs: false, stack: false };
//
// Mkdir_1.event = new EventEmitter;

const Arht = require ( 'st_ini_arht' );
const atOutFm = Arht.atOut_fm;

const fn = () => {

    const ENV = atOutFm.at ( fn );

    // DODY of function

    // // start signal of fn
    // fn.event.emit ( 'start', ENV );
    //
    // // push innerState - example ENV:
    // fn.event.emit ( 'innerState', fn.innerState );
    //
    // // pull externalState
    // fn.event.on ( 'externalState', d => { // d typeof Object
    //     fn.exterState = d;
    // } );

    // USE ENV.mode :
    // fn.l_fsLog ( ENV.MODE, 'fn.l_fsLog => RUN main tread', ENV.MODULE.path );
    // fn.l_deb ( ENV.MODE );
    // fn.l_log ( ENV.MODE, 'fn.l_log => RUN main tread' );
    // fn.l_log_deb ( ENV.MODE, 'fn.l_log_deb => RUN main tread' );
    // fn.dirDeepOptoins ( ENV );
    debugger
};
atOutFm.prop ( fn );

atOutFm.out ( fn );
// -------------------------------------
// NEED atOutFm.path for l_logFs run flow
// atOutFm.before( fn , module)

// -------------------------------------
// possible subscription for start fn :
// fn.event.on ('start', d => fn.dirDeepOptoins(d))

// define behavior MODE
// fn.mode.logFs = true;
// fn.mode.log = true;
// fn.mode.deb = true;
// fn.mode.debLog = true;

module.exports = fn;
