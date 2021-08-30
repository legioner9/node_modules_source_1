const Arht = require ( 'st_arht' );
const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
const Func_examp = require('../function')

// event report out (export from) Func_examp:

Func_examp.event.once ( '_start', function ( ENV ) {
    Func_examp.dirDeepOptions ( ENV );
}, Func_examp );

Func_examp.event.once ( '_innerState', function ( innerState ) {
    Func_examp.dirDeepOptions ( innerState );
}, Func_examp );

// define report behaviour :

Func_examp.mode.log = true;
Func_examp.mode.deb = true;
Func_examp.mode.debLog = true;
Func_examp.mode.logFs = true;

// BOUNDEN CALL define root_path
arht_fm.before ( Func_examp, module );

Func_examp ();

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
Func_examp.event.emit ( '_externalState', '__blob' ); // exterState: "__blob"

debugger
