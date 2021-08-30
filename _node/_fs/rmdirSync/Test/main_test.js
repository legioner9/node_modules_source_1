const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const ini_fs = _require ( '_node' )._fs;
const _utest = _require ( '_utest_ini' );

const Path = require ( 'path' );
const rmdirSync = ini_fs.rmdirSync;

debugger

// rmdirSync.mode.log = true;
// rmdirSync.mode.deb = true;
// rmdirSync.mode.debLog = true;
// rmdirSync.mode.logFs = true;
// rmdirSync.stack = true;
// rmdirSync.exit = true

// BOUNDEN CALL define root_path
// arht.module ( fn, module );
rmdirSync.module = module;
rmdirSync.mode.log = true;

const true_path = Path.join ( __dirname, 'TEST_DIR' );
const false_path = Path.join ( __dirname, 'error_TEST_DIR' );
debugger

rmdirSync ( true_path );
rmdirSync ( false_path );

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

