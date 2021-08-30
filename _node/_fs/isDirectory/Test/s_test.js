const Fs = require ( 'fs' );
const Path = require ( 'path' );

const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;
const _fs = _require ( '_node' )._fs

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
// ini_fs.s_isDirectory.exit = true;
// ini_fs.s_isDirectory.utest = true;

const arr = Fs.readdirSync ( __dirname );
const assert = require ( 'assert' ).strict;

let res = true;
const arr_res = arr.map ( item => {
    const path = Path.join ( __dirname, item );

    const if_1 = Fs.statSync ( path ).isDirectory ();
    const if_2 = _fs.isDirectory ( path );

    try {
        assert.deepEqual ( if_1, if_2 );

    }
    catch (e) {
        res = false;
    }

} );

// const u1 = ini_fs.s_isDirectory ( 'rrr' );
// const u2 = arr_res[0] === false;
// const u3 = arr_res[1] === true;
//
// if ( !u1 ) console.log ( '>>> s_isDirectory err_test fail' );
// if ( !u2 ) console.log ( '>>> s_isDirectory arr_0 fail' );
// if ( !u3 ) console.log ( '>>> s_isDirectory arr_1 fail' );
//
// const res = u1 && u2 && u3;

module.exports = res;

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

