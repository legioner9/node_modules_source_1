const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const _node = _require ( '_node' );
const _utest = _require ( '_utest_ini' );

const Path = require ( 'path' );

const writeFileSinc = _node._fs.writeFileSync;

// event report out (export from) Func_examp:

// fn.event.once ( '_start', function ( ENV ) {
//     debugger
//     console.log ( 'start function with ENV: ', ENV );
// }, fn );
//
// fn.event.once ( '_innerState', function ( innerState ) {
//     debugger
//     console.log ( 'current innerState is: ', innerState );
// }, fn );

// define report behaviour :

// fn.mode.log = true;
// fn.mode.deb = true;
// fn.mode.debLog = true;
// fn.mode.logFs = true;
// fn.stack = true;
// fn.exit = true

// BOUNDEN CALL define root_path
// arht.module ( fn, module );
writeFileSinc.module = module;
writeFileSinc.warn = true;
writeFileSinc.exit = true;
writeFileSinc.err = true;

const true_path = Path.join ( __dirname, 'write_this_file' );
const false_path = Path.join ( __dirname, 'error_dir', 'write_this_file' );

debugger
// writeFileSinc.utest = true;

writeFileSinc ( true_path );
writeFileSinc ( false_path );

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:


