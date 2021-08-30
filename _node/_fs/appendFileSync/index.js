// area_function_v.1.1.0

const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const Fs = require ( 'fs' );
const wee = _require ( '_util' ).SetWEE.wee;

const Func_examp = ( path, data ) => {

    // BOUNDEN CALL define inner Env fnd Utils
    const _e = arht.env ( Func_examp );
    const _u = arht.utils ( Func_examp );

    // _u._deb ();
    // _u._log ( 'mes _u._log' );
    // _u._log_deb ( 'mes _u._log_deb' );
    // _u._fsLog ( 'mes from _u._fsLog' );
    // _u._fsLogErr ( 'mes from _u._fsLogErr' );
    // // _u._console_obj ( { a: 'aa' } );
    // _u._stack('This from _stack')
    //
    // _u._emit ( 'ev_from_func', 'mes ev_from_func' );
    // _u._on ( 'ev_to_func', d => console.log ( 'function listener getting that: ', d ) );
    // _u._once ( 'ev_ce_to_func', d => console.log ( 'function listener getting that: ', d ) );
    //
    // _u._emit( '_start', _e);
    // _u._emit( '_innerState', _e.INNER);
    //
    // if ( _e.EXIT ) process.exit ( 0 );

//    AREA function

    try {
        _u._deb ();
        const is = Fs.appendFileSync ( path, data );

        _u._log ( ` for path = \"${ path }\" isFile = \"${ is }\" ` );
        return is;
    }
    catch (e) {
        _u._deb ();

        //    UTEST response:
        if ( _e.UTEST ) {

            return 'ENOENT: no such file or directory, open \'F:\\Node_projects\\Node_Way\\node_modules_\\_node\\_fs\\appendFileSync\\Test\\error_dir\\write_this_file\'' === e.message;
        }
        //=========================

        wee ( e, _e );
    }

};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
