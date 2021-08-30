const fn_callback_err = ( fn, args, callback, condition, warning_str ) => {
    if ( condition ( args ) ) {
        callback ( null, fn ( args ) );
    }
    else {
        callback ( new Error ( warning_str ) );
    }
};
