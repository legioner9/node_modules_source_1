function TransAllOn ( transable ) {
    if ( !( transable instanceof require ( 'stream' ).Transform ) ) throw new Error ( 'Arg is not Transform' );
    transable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'Is res data', data );
        debugger;
    } );

    transable.on ( 'readable', ( args ) => {
        const readable = { readable: args };// args = close: IncomingMessage
        console.log ( 'Is res readable', readable );
        debugger;
    } );

    transable.on ( 'end', ( args ) => {
        const end = { end: args };// args = close: IncomingMessage
        console.log ( 'Is res end', end );
        debugger;
    } );

    transable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'Is res error', error );
        debugger;
    } );

    transable.on ( 'close', ( args ) => {
        const close = { close: args };// args = close: IncomingMessage
        console.log ( 'Is res close', close );
        debugger;
    } );

}

TransAllOn.help = `ReadAllOn ( readable )`;

TransAllOn.call = () => console.log ( TransAllOn );

module.exports = TransAllOn;