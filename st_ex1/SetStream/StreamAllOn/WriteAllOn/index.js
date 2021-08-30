function WriteAllOn ( writable, name = 'w _0' ) {

    if ( !( writable instanceof require ( 'stream' ).Writable || writable.socket instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
    wOnName ( writable, name );

}

function wOnName ( writable, name = 'w' ) {

    const st_ini = require ( 'st_ini' );
    const singlAddEvent = st_ini.singlAddEvent;
    const SM = st_ini.SM;

    const fclose = () => {
        console.log ( 'WE close', SM (), name );
    };
    singlAddEvent ( writable, 'close', fclose );

    const fdrain = () => {
        console.log ( 'WE drain', SM (), name );
    };
    singlAddEvent ( writable, 'drain', fdrain );

    const ffinish = () => {
        console.log ( 'WE finish', SM (), name );
    };
    singlAddEvent ( writable, 'finish', ffinish );

    const fpipe = ( args ) => {
        const data = { pipe: args };// args = close: IncomingMessage
        console.log ( 'WE pipe', SM (), name, data );
    };
    singlAddEvent ( writable, 'pipe', fpipe );

    const funpipe = ( args ) => {
        const data = { unpipe: args };// args = close: IncomingMessage
        console.log ( 'WE unpipe', SM (), name, data );
    };
    singlAddEvent ( writable, 'unpipe', funpipe );

    const ferror = ( args ) => {
        const data = { error: args };// args = close: IncomingMessage
        console.log ( 'WE error', SM (), name, data );
    };
    singlAddEvent ( writable, 'error', ferror );

}

WriteAllOn.help = `
WriteAllOn ( writable )
    writable.on ( 'close', () => {
        console.log ( 'WE close' );
    } );

    writable.on ( 'drain', () => {
        console.log ( 'WE drain' );
    } );

    writable.on ( 'finish', () => {
        console.log ( 'WE finish' );
    } );

    writable.on ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', pipe );
    } );

    writable.on ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', unpipe );
    } );

    writable.on ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', error );
    } );`;

WriteAllOn.call = () => console.log ( WriteAllOn );

module.exports = WriteAllOn;