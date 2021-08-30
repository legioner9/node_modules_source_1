const fs = require ( 'fs' );
const my_path = require ( 'path' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

function SuLogToFile ( str, file_name = 'SuLog.txt', dir_name = 'SuLog' ) {

    switch (file_name) {
        case '#to_cons':
            s_log_to_cons_1 ( str );
            break;

        default:
            fs.mkdir ( my_path.join ( dir_name ), { recursive: true }, ( err ) => {
                if ( err ) throw err;
                s_log_to_file ( str, my_path.join ( dir_name, file_name ) );
            } );
            break;
    }
}

SuLogToFile.help = `file_name ?= '#to_cons'
SuLogToFile ( str, file_name = 'SuLog.txt', dir_name = 'SuLog' )`;

function s_log_to_file ( str, path ) {

    const rstr = new Readable ();
    rstr.push ( str );
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

function s_log_to_cons_1 ( str ) {

    console.log ( str );

}

module.exports = SuLogToFile;
