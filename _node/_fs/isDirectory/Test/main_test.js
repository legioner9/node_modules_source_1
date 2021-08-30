const Path = require ( 'path' );

const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const ini_fs = _require ( '_node' )._fs

const isDirectory = ini_fs.isDirectory;

// event report out (export from) Func_examp:

// isDirectory.event.once ( '_start', function ( ENV ) {
//     debugger
//     console.log ( 'start function with ENV: ', ENV );
// }, isDirectory );
//
// isDirectory.event.once ( '_innerState', function ( innerState ) {
//     debugger
//     console.log ( 'current innerState is: ', innerState );
// }, isDirectory );
//
// isDirectory.event.once ( '_point_event', function ( point_object ) {
//     debugger
//     console.log ( 'point event return this any_body: ', point_object );
// }, isDirectory );

// define report behaviour :

// isDirectory.mode.log = true;
// isDirectory.mode.deb = true;
// isDirectory.mode.debLog = true;
// isDirectory.mode.logFs = true;
// isDirectory.stack = true;
// isDirectory.exit = true;

// BOUNDEN CALL define root_path
isDirectory.module = module;
isDirectory.fname = 'isDirectory';


// isDirectory.utest = true;
// isDirectory.warn = true;
// isDirectory.exit = true;
// isDirectory.err = true; by default

const true_path = __dirname;
const false_path = Path.join ( __dirname, 'false' );

// const res_1 = isDirectory (true_path);
const res_2 = isDirectory (false_path);

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// isDirectory.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// isDirectory.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

