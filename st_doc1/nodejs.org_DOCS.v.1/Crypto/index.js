const cripto = require ( 'crypto' );
const Ini = require ( 'st_ini' );
const reportProgress = Ini.reportProgress;

const my_path = require ( 'path' );
const fs = require ( "fs" );
const wfs = fs.createWriteStream ( my_path.join ( __dirname, 'file.txt' ) );
for ( let i = 0 ; i < 10000 ; i++ ) {
    wfs.write ( 'Cum lactea tolerare, omnes absolutioes carpseris velox, gratis amores.' );
}
wfs.end ( '------------- END ------------' );

const rfs = fs.createReadStream ( my_path.join ( __dirname, 'file.txt' ) );
const wfsCr = fs.createWriteStream ( my_path.join ( __dirname, 'file_cr.txt' ) );

// const rfsCr = fs.createReadStream ( my_path.join ( __dirname, 'file.txt.cr' ) );
// const wfsCrCopy = fs.createWriteStream ( my_path.join ( __dirname, 'file_copy.txt' ) );
//
const cripto_stream = cripto.createCipher ( 'aes192', 'secret' );
const decripto_stream = cripto.createDecipher ( 'aes192', 'secret' );

rfs
    .pipe ( cripto_stream )
    .pipe ( decripto_stream )
    .pipe ( wfsCr );

// rfsCr
//     .pipe ( decripto_stream )
//     .pipe ( wfsCrCopy );

console.log ( 'eF', Ini.SM () );


