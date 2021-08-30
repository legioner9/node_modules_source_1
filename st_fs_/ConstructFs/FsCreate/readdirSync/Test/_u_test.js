const Fs = require ( 'fs' );
const Path = require ( 'path' );

const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;
const ini_fs = _require ( 'st_ini_fs_' );
debugger
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

const s_mkdirSync = ini_fs.s_mkdirSync;
const true_path = Path.join ( __dirname, 'TEST_DIR' );
const false_path = Path.join ( __dirname + 'rrr', 'TEST_DIR' );

s_mkdirSync.utest = true; // first priority : mutation from utest
// s_mkdirSync.exit = true; // second priority : return console.log(e)
// s_mkdirSync.err = true; // third  default : throw new Error('s_mkdirSync archetype error')

// s_mkdirSync.mode.log = true;
// s_mkdirSync.mode.deb = true;
const u1 = s_mkdirSync ( true_path );
const u2 = s_mkdirSync ( false_path );
// const arr = Fs.readdirSync ( __dirname );
//
// const arr_res = arr.map ( item => {
//     const is = ini_fs.s_isFile ( Path.join ( __dirname, item ) );
//     return is;
// } );

// debugger
// const u1 = ini_fs.s_isFile ( 'rrr' );
// const u2 = arr_res[0] === true;
// const u3 = arr_res[1] === false;
//
if ( !u1 ) console.log ( '>>> s_mkdirSync create fail' );
if ( !u2 ) console.log ( '>>> s_mkdirSync err_test fail' );

const res = u1 && u2;
debugger
module.exports = res;

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

