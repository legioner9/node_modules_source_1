const zlib = require ( 'zlib' );
const Ini = require ( 'st_ini' );
const reportProgress = Ini.reportProgress;

const my_path = require ( 'path' );
const fs = require ( "fs" );
const wfs = fs.createWriteStream ( my_path.join ( __dirname, 'file.txt' ) );
for ( let i = 0 ; i < 1000000 ; i++ ) {
    wfs.write ( 'Cum lactea tolerare, omnes absolutioes carpseris velox, gratis amores.' );
}
wfs.end ( '------------- END ------------' );

fs.createReadStream ( my_path.join ( __dirname, 'file.txt' ) )
    .pipe ( zlib.createGzip () )
    .on ( 'data', ( d ) => process.stdout.write ( '.' ) )
    .pipe ( fs.createWriteStream ( my_path.join ( __dirname, 'file.txt.zz' ) ) )
    .on ( 'close', () => {
        process.stdout.write('Done zip!' )
        fs.createReadStream ( my_path.join ( __dirname, 'file.txt.zz' ) )
            .pipe ( zlib.createGunzip () )
            // .on('data',(d)=>process.stdout.write('_'))
            .pipe ( fs.createWriteStream ( my_path.join ( __dirname, 'file_copy.txt' ) ) )
            .on ( 'close', () => process.stdout.write( 'Done unzip!' ) );
    } );
