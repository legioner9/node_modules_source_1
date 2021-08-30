const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

const crypto = require ( 'crypto' );
const fs = require ( 'fs' );
const zlib = require ( 'zlib' );
const my_path = require ( 'path' );
const file = process.argv[2];

const reportProgress = new Transform ( {
                                           transform ( chunk, encoding, callback ) {
                                               process.stdout.write ( '.' );
                                               callback ( null, chunk );
                                           }
                                       } );

fs.createReadStream ( my_path.join ( __dirname, 'SrcGzip', ( file + '.txt' ) ) )
    .pipe ( zlib.createGzip () )
    .pipe ( crypto.createCipher ( 'aes192', 'a_secret' ) )
    .pipe ( reportProgress )
    .pipe ( fs.createWriteStream ( my_path.join ( __dirname, 'SrcGzip', ( file + '.zz' ) ) ) )
    .on ( 'finish', () => process.stdout.write ( 'Done' ) );