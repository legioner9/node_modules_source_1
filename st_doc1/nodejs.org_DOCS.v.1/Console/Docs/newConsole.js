const fs = require ( 'fs' );
const my_path = require ( 'path' );

const output = fs.createWriteStream ( my_path.join ( __dirname, 'Log', 'stdout.log' ) );
const errorOutput = fs.createWriteStream ( my_path.join ( __dirname, 'Log', 'stderr.log' ) );
// Custom simple logger
const logger = new console.Console ( {
                                         stdout: output,
                                         stderr: errorOutput,
                                         ignoreErrors: true,
                                         colorMode: 'auto',
                                     } );
// use it like console
const count = 5;
logger.log ( 'count: %d', count );
// In stdout.log: count 5
