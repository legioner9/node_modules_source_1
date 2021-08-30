const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );

// const inStream = new Readable ( {
//                                     read ( size ) {
//                                         this.push ( String.fromCharCode ( this.currentCharCode++ ) );
//                                         setTimeout ( () => this.push ( null ), 1000 );
//                                     }
//                                 } );

class InStream extends Readable {
    constructor ( start_char, end_char ) {
        super ();
        this.start = start_char;
        this.end = end_char;
    }

    _read ( size ) {
        this.push ( String.fromCharCode ( this.start++ ) + '\n' );
        if ( this.start > this.end ) this.push ( null );
    }
}

const inStream = new InStream ( 65, 90 );
inStream.push ( 'Start' );
// inStream.push ( 'ABCDEFGHIJKLM' );
// inStream.push ( 'NOPQRSTUVWXYZ \n' );

// inStream.push ( null ); // No more data

const write_fs = fs.createWriteStream ( __dirname + '\\for_write.txt', 'utf-8' );
write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
// inStream.pipe ( process.stdout );

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