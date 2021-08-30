const fn_async_err = async ( fn, args, condition, warning_str ) => {
    if ( condition ( args ) ) {
        fn ( args );
    }
    else {
        throw new Error ( warning_str );
    }
};

( async ( arg ) => {
    const Try = d => d;
    const Catch = d => d;
    try {
        Try ( await fn_async_err ( arg ) );
    }
    catch (e) {
        Catch ( e );
    }
} ) ();