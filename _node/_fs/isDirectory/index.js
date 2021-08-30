const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const Fs = require ( 'fs' );
// const { wee } = _require ( '_util_ini' );
const wee = _require ( '_util' ).SetWEE.wee;

const Func_examp = path => {

    // BOUNDEN CALL define inner Env fnd Utils
    const _e = arht.env ( Func_examp );
    const _u = arht.utils ( Func_examp );

    // _u._deb ();
    // _u._log ( 'mes _u._log' );
    // _u._log_deb ( 'mes _u._log_deb' );
    // _u._fsLog ( 'mes from _u._fsLog' );
    // _u._fsLogErr ( 'mes from _u._fsLogErr' );
    // _u._console_obj ( { a: 'aa' } );
    // _u._stack('This from _stack')
    //
    // _u._emit ( 'ev_from_func', 'mes ev_from_func' );
    // _u._on ( 'ev_to_func', d => console.log ( 'function listener getting that: ', d ) );
    // _u._once ( 'ev_ce_to_func', d => console.log ( 'function listener getting that: ', d ) );
    //
    // _u._emit( '_start', _e);
    // _u._emit( '_innerState', _e.INNER);
    //
    // const return_in_point = {any:'any_body'}
    // _u._emit('_point_event',return_in_point)

    //    function code :
    try {
        _u._deb ();
        const stats = Fs.statSync ( path );
        const is = stats.isDirectory ();
        _u._log ( ` for path = \"${ path }\" ${ _e.FNAME } return \"${ is }\" ` );
        return is;
    }
    catch (e) {
        _u._deb ();

        if ( _e.UTEST ) {
            return 'ENOENT: no such file or directory, stat \'rrr\'' === e.message;
        }

        wee ( e, _e, obj_warn_log = {
            warn_log: d => {if ( d.message ) console.log ( d.message );},
            exit_log: d => console.log ( d ),
            err_log: d => console.log ( d ),
        } );
        // if ( _e.WARN ) {
        //     return console.log ( `${ e.message }` );
        // }
        //
        // if ( _e.EXIT ) {
        //     console.log ( `${ e.message }` );
        //     process.exit ( 0 );
        // }
        // if ( _e.ERR ) {
        //     throw new Error ( e );
        // }

    }

};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
