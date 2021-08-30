// area_function_v.1.1.0

const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const Fs = require ( 'fs' );
const wee = _require ( '_util' ).SetWEE.wee;

const Func_examp = ( path ) => {

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

    const is_create = d => {
        return `
    RUN > Fs.mkdirSync with:,
    path = ${ d },
    Fs.mkdirSync create
    `;
    };

    const is_read = d => {
        return `
    RUN > Fs.readdirSync with:,
    path = ${ d },
    is read directory 
    `;
    };

    const is_exist = d => {
        return `
    RUN > Fs.mkdirSync already exist,
    path = ${ d },
    `;
    };

    const not_exist = d => {
        return `
    RUN > Fs.mkdirSync not exist,
    path = ${ d },
    `;
    };

    let content_dir = [];

    try {
        _u._deb ();
        if ( Fs.existsSync ( path ) ) {
            content_dir = Fs.readdirSync ( path );
            _u._log ( ` for path = \"${ path }\" ${ _e.FNAME } return is ${content_dir} ` );
        }
        else {
            _u._log ( ` for path = \"${ path }\" ${ _e.FNAME } return is exist ` );
            Fs.readdirSync ( path );
        }

        if ( _e.UTEST ) return content_dir[0] === '1.js' && content_dir[4] === 'TEST_DIR';
        return content_dir;
    }
    catch (e) {
        _u._deb ();

        if ( _e.UTEST ) {
            _u._deb ();
            return 'ENOENT: no such file or directory, scandir \'F:\\Node_projects\\Node_Way\\node_modules_\\_node\\_fs\\readdirSync\\Test\\rrr\'' === e.message;
        }

        wee ( e, _e );
    }

};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
