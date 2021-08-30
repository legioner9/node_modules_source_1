const fs = require ( 'fs' );
const Emitter = require ( 'events' ).EventEmitter;
const my_path = require ( 'path' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

class ClEventRout extends Emitter {
    constructor () {
        super ();
    }

    onToConsole () {
        this.on ( 'toConsole', ( d ) => {
            let data = d;
            if ( d instanceof Object ) data = JSON.stringify ( d );
            console.log ( data );
        } );
    }

    onToFile ( dir_path, file_name ) {
        this.on ( 'toFile', ( d ) => {

            fs.mkdir ( my_path.join ( dir_path ), { recursive: true }, ( err ) => {
                if ( err ) throw err;
                s_log_to_file ( d, my_path.join ( dir_path, file_name ) );
            } );
        } );
    }
}

function s_log_to_file ( str, path ) {

    const rstr = new Readable ();
    let string = str;
    if ( str instanceof Object ) string = JSON.stringify ( str );
    rstr.push ( string );
    rstr.push ( null );
    // inStream.pipe ( process.stdout );
    const write_fs = fs.createWriteStream ( path, 'utf-8' );
    write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
    pipeline (
        rstr,
        process.stdout,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
    pipeline (
        rstr,
        write_fs,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
}

ClEventRout.help = `'toConsole'
'toFile' :: onToFile ( dir_path, file_name ) `;

ClEventRout.call = () => console.log ( ClEventRout );

module.exports = ClEventRout;