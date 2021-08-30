const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const my_path = require ( 'path' );
const assert = require ( 'assert' );

const {
    Su_log_to_file,
    SuTry,
} = require ( 'st_ex1' );

SuTry ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );
