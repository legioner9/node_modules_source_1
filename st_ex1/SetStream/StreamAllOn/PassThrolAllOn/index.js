function PassThrolAllOn ( passthro ) {
    if ( !( passthro instanceof require ( 'stream' ).PassThrough ) ) throw new Error ( 'Arg is not PassThrough' );
    passthro.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'Is res data', data );
        debugger;
    } );

    passthro.on ( 'readable', ( args ) => {
        const readable = { readable: args };// args = close: IncomingMessage
        console.log ( 'Is res readable', readable );
        debugger;
    } );
 
    passthro.on ( 'end', ( args ) => {
        const end = { end: args };// args = close: IncomingMessage
        console.log ( 'Is res end', end );
        debugger;
    } );

    passthro.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'Is res error', error );
        debugger;
    } );

    passthro.on ( 'close', ( args ) => {
        const close = { close: args };// args = close: IncomingMessage
        console.log ( 'Is res close', close );
        debugger;
    } );

}

PassThrolAllOn.help = `DuplAllOn ( duplable )`;

PassThrolAllOn.call = () => console.log ( PassThrolAllOn );

module.exports = PassThrolAllOn;