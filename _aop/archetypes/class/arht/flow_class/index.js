const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );

const Func_examp = () => {
    debugger
    // BOUNDEN CALL define inner Env fnd Utils
    const _e = arht.env ( Func_examp );
    const _u = arht.utils ( Func_examp );
    _u._deb ();
    _u._log ( 'mes _u._log' );
    _u._log_deb ( 'mes _u._log_deb' );
    _u._fsLog ( 'mes from _u._fsLog' );
    _u._fsLogErr ( 'mes from _u._fsLogErr' );
    _u._console_obj ( _e );
    _u._stack ( 'This from _stack' );

    _u._emit ( 'ev_from_func', 'mes ev_from_func' );
    _u._on ( 'ev_to_func', d => console.log ( 'function listener getting that: ', d ) );
    _u._once ( 'ev_ce_to_func', d => console.log ( 'function listener getting that: ', d ) );

    _u._emit ( '_start', _e );
    _u._emit ( '_innerState', _e.INNER );

    if ( _e.EXIT ) process.exit ( 0 );

    //    BODY function ___________________________________________

};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
