const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const my_path = require ( 'path' );

const inStream = new Readable ( {
                                    read ( size ) {
                                        setTimeout ( () => this.push ( null ), 1000 );
                                    }
                                } );

inStream.push ( 'ABCDEFGHIJKLM' );
inStream.push ( 'NOPQRSTUVWXYZ \n' );

// inStream.push ( null ); // No more data

const write_fs = fs.createWriteStream ( __dirname + '\\for_write.txt', 'utf-8' );
write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
// inStream.pipe ( process.stdout );

pipeline (
    inStream,
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
    inStream,
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