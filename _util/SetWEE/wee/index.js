// area_function_v.1.1.0

const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );

const Func_examp = ( err_object = new Error ( 'default error' ),
                     env_object = {
                         WARN: false,
                         EXIT: false,
                         ERR: true
                     },
                     obj_warn_log = {
                         warn_log: d => {if ( d.message ) console.log ( d.message );},
                         exit_log: d => console.log ( d ),
                         err_log: d => console.log ( d ),
                     } ) => {

    // BOUNDEN CALL define inner Env fnd Utils
    // const _e = arht.env ( Func_examp );
    // const _u = arht.utils ( Func_examp );
    // _u._deb ();
    // _u._log ( 'mes _u._log' );
    // _u._log_deb ( 'mes _u._log_deb' );
    // _u._fsLog ( 'mes from _u._fsLog' );
    // _u._fsLogErr ( 'mes from _u._fsLogErr' );
    // _u._console_obj ( { a: 'aa' } );
    // _u._stack ( 'This from _stack' );
    //
    // _u._emit ( 'ev_from_func', 'mes ev_from_func' );
    // _u._on ( 'ev_to_func', d => console.log ( 'function listener getting that: ', d ) );
    // _u._once ( 'ev_ce_to_func', d => console.log ( 'function listener getting that: ', d ) );
    //
    // _u._emit ( '_start', _e );
    // _u._emit ( '_innerState', _e.INNER );
    //
    // if ( _e.EXIT ) process.exit ( 0 );

    if ( env_object.WARN ) {
        return obj_warn_log.warn_log ( err_object, env_object );
    }

    if ( env_object.EXIT ) {
        obj_warn_log.exit_log ( err_object, env_object );
        process.exit ( 0 );
    }

    obj_warn_log.err_log ( err_object, env_object );
    throw err_object;

};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
