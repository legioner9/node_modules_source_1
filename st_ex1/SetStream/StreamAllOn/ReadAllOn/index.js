function ReadAllOn ( readable, name = 'r_0' ) {

    if ( !( readable instanceof require ( 'stream' ).Readable || readable.socket instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    rOnName ( readable, name );

}

function rOnName ( readable, name = 'r' ) {

    const st_ini = require ( 'st_ini' );
    const singlAddEvent = st_ini.singlAddEvent;
    const SM = st_ini.SM;

    const fdata = ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', SM (), name, data );
    };
    singlAddEvent ( readable, 'data', fdata );

    const freadable = () => {
        console.log ( 'RE readable', SM (), name );
    };
    singlAddEvent ( readable, 'readable', freadable );

    const fend = () => {
        console.log ( 'RE end', SM (), name );
    };
    singlAddEvent ( readable, 'end', fend );

    const ferror = ( args ) => {
        const data = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', SM (), name, data );
    };
    singlAddEvent ( readable, 'error', ferror );

    const fclose = () => {
        console.log ( 'RE close', SM (), name );
    };
    singlAddEvent ( readable, 'close', fclose );

}

ReadAllOn.help = `    
ReadAllOn ( readable )
    readable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', data );
    } );

    readable.on ( 'readable', () => {
        console.log ( 'RE readable' );
    } );

    readable.on ( 'end', () => {
        console.log ( 'RE end' );
    } );

    readable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', error );
    } );

    readable.on ( 'close', () => {
        console.log ( 'RE close' );
    } );`;

ReadAllOn.call = () => console.log ( ReadAllOn );

module.exports = ReadAllOn;