function WriteAllOnce ( writable, name = 'w _0' ) {

    if ( !( writable instanceof require ( 'stream' ).Writable || writable.socket instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
    wOnceName ( writable, name );

}

function wOnceName ( writable, name = 'w' ) {
    const st_ini = require ( 'st_ini' );
    const singlAddOnceEvent = st_ini.singlAddOnceEvent;
    const SM = st_ini.SM;

    const fclose = () => {
        console.log ( 'WEce close', SM (), name );
    };
    singlAddOnceEvent ( writable, 'close', fclose );

    const fdrain = () => {
        console.log ( 'WEce drain', SM (), name );
    };
    singlAddOnceEvent ( writable, 'drain', fdrain );

    const ffinish = () => {
        console.log ( 'WEce finish', SM (), name );
    };
    singlAddOnceEvent ( writable, 'finish', ffinish );

    const fpipe = ( args ) => {
        const data = { pipe: args };// args = close: IncomingMessage
        console.log ( 'WEce pipe', SM (), name, data );
    };
    singlAddOnceEvent ( writable, 'pipe', fpipe );

    const funpipe = ( args ) => {
        const data = { unpipe: args };// args = close: IncomingMessage
        console.log ( 'WEce unpipe', SM (), name, data );
    };
    singlAddOnceEvent ( writable, 'unpipe', funpipe );

    const ferror = ( args ) => {
        const data = { error: args };// args = close: IncomingMessage
        console.log ( 'WEce error', SM (), name, data );
    };
    singlAddOnceEvent ( writable, 'error', ferror );
}

WriteAllOnce.help = `function wOnceName ( writable, name = 'w' ) {
    writable.once ( 'close', () => {
        console.log ( 'WE close', name  );
    } );

    writable.once ( 'drain', () => {
        console.log ( 'WE drain', name );
    } );

    writable.once ( 'finish', () => {
        console.log ( 'WE finish', name );
    } );

    writable.once ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', name, pipe );
    } );

    writable.once ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', name, unpipe );
    } );

    writable.once ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', name, error );
    } );
}
`;

WriteAllOnce.call = () => console.log ( WriteAllOnce );

module.exports = WriteAllOnce;