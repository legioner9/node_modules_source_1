const fs = require ( 'fs' );
const zlib = require ( 'zlib' );
const my_path = require ( 'path' );
const file = process.argv[2];

fs.createReadStream ( my_path.join ( __dirname, 'SrcGzip', ( file + '.txt' ) ) )
    .pipe ( zlib.createGzip () )
    .on('data',()=>process.stdout.write('.'))
    .pipe ( fs.createWriteStream ( my_path.join ( __dirname, 'SrcGzip', ( file + '.gz' ) ) ) )
    .on('finish',()=>process.stdout.write('Done'));