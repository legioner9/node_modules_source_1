const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const ini_fs = _require ( '_node' )._fs;
// const _utest = _require ( '_utest_ini' );

const Path = require ( 'path' );
const rmdirSync = ini_fs.rmdirSync;


// rmdirSync.mode.log = true;
// rmdirSync.mode.deb = true;
// rmdirSync.mode.debLog = true;
// rmdirSync.mode.logFs = true;
// rmdirSync.stack = true;
// rmdirSync.exit = true

// BOUNDEN CALL define root_path
// arht.module ( fn, module );
rmdirSync.module = module;
// rmdirSync.mode.log = true;

const true_path = Path.join ( __dirname, 'TEST_DIR' );
const false_path = Path.join ( __dirname, 'error_TEST_DIR' );

rmdirSync.utest = true;

const u1 = rmdirSync ( false_path );
// const u2 = rmdirSync ( true_path );

if ( !u1 ) console.log ( '>>> s_isDirectory err_test fail' );
// if ( !u2 ) console.log ( '>>> s_isDirectory arr_0 fail' );

const res = u1 ;

module.exports = res;

