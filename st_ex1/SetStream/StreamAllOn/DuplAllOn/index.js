function DuplAllOn ( duplable ) {
    if ( !( duplable instanceof require ( 'stream' ).Duplex ) ) throw new Error ( 'Arg is not Duplex' );
    duplable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'Is res data', data );
        debugger;
    } );

    duplable.on ( 'readable', ( args ) => {
        const readable = { readable: args };// args = close: IncomingMessage
        console.log ( 'Is res readable', readable );
        debugger;
    } );

    duplable.on ( 'end', ( args ) => {
        const end = { end: args };// args = close: IncomingMessage
        console.log ( 'Is res end', end );
        debugger;
    } );

    duplable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'Is res error', error );
        debugger;
    } );

    duplable.on ( 'close', ( args ) => {
        const close = { close: args };// args = close: IncomingMessage
        console.log ( 'Is res close', close );
        debugger;
    } );

}

DuplAllOn.help = `DuplAllOn ( duplable )`;

DuplAllOn.call = () => console.log ( DuplAllOn );

module.exports = DuplAllOn;