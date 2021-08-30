const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;
const ini_fs = _require ( 'st_ini_fs_' );
const utest = _require ( '_utest_ini' );

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
utest.uall.module = module;

const isDirectory = require ( '../../../../../st_fs_/ConstructFs/FsCreate/isDirectory/Test/u_test' );
const arr_to_utests = [
    isDirectory,
];
let res_utest;

debugger
utest.uall ();

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

