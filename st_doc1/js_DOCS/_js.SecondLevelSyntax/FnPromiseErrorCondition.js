const fn_promise_err = ( fn, args, condition, warning_str ) =>
    new Promise ( ( res, rej ) => {
        if ( condition ( args ) ) {
            res ( fn ( args ) );
        }
        else {
            rej ( new Error ( warning_str ) );
        }
    } );

fn_promise_err
    .then ( data => data )
    .catch ( err => err );