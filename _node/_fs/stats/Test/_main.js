const Fs = require ( 'fs' );
const Path = require ( 'path' );

const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;
const ini_fs = _require ( 'st_ini_fs_' );

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
//
// fn.event.once ( '_point_event', function ( point_object ) {
//     debugger
//     console.log ( 'point event return this any_body: ', point_object );
// }, fn );

// define report behaviour :

// fn.mode.log = true;
// fn.mode.deb = true;
// fn.mode.debLog = true;
// fn.mode.logFs = true;
// fn.stack = true;
// fn.exit = true;

// BOUNDEN CALL define root_path
// fn.module = module;
ini_fs.s_isDirectory.exit = true;

const arr = Fs.readdirSync ( __dirname );

arr.map ( item => {
    console.log ( item, ini_fs.s_isDirectory ( Path.join ( __dirname, item ) ) );
} );
ini_fs.s_isDirectory ( 'rrr' );
debugger

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

