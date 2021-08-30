function ReadAllOnce ( readable, name = 'r_0' ) {

    if ( !( readable instanceof require ( 'stream' ).Readable || readable.socket instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    rOnceName ( readable, name );

}

function rOnceName ( readable, name = 'r' ) {

    const st_ini = require ( 'st_ini' );
    const singlAddOnceEvent = st_ini.singlAddOnceEvent;
    const SM = st_ini.SM;

    const fdata = ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'REce data', SM (), name, data );
    };
    singlAddOnceEvent ( readable, 'data', fdata );

    const freadable = () => {
        console.log ( 'REce readable', SM (), name );
    };
    singlAddOnceEvent ( readable, 'readable', freadable );

    const fend = () => {
        console.log ( 'REce end', SM (), name );
    };
    singlAddOnceEvent ( readable, 'end', fend );

    const ferror = ( args ) => {
        const data = { error: args };// args = close: IncomingMessage
        console.log ( 'REce error', SM (), name, data );
    };
    singlAddOnceEvent ( readable, 'error', ferror );

    const fclose = () => {
        console.log ( 'REce close', SM (), name );
    };
    singlAddOnceEvent ( readable, 'close', fclose );

}

ReadAllOnce.help = `function rOnceName ( readable, name = 'r' ) {
    readable.once ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', name, data );
    } );

    readable.once ( 'readable', () => {
        console.log ( 'RE readable', name );
    } );

    readable.once ( 'end', () => {
        console.log ( 'RE end', name );
    } );

    readable.once ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', name, error );
    } );

    readable.once ( 'close', () => {
        console.log ( 'RE close', name );
    } );

}`;

ReadAllOnce.call = () => console.log ( ReadAllOnce );

module.exports = ReadAllOnce;