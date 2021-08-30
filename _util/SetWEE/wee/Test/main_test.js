const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );

const wee = _require ( '_util_ini' );
debugger
// event report out (export from) Func_examp:

fn.event.once ( '_start', function ( ENV ) {
    debugger
    console.log ( 'start function with ENV: ', ENV );
}, fn );

fn.event.once ( '_innerState', function ( innerState ) {
    debugger
    console.log ( 'current innerState is: ', innerState );
}, fn );

// define report behaviour :

fn.mode.log = true;
fn.mode.deb = true;
fn.mode.debLog = true;
fn.mode.logFs = true;
fn.stack = true;
fn.exit = true;

// BOUNDEN CALL define root_path
// arht.module ( fn, module );
fn.module = module;
debugger
fn ();

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

