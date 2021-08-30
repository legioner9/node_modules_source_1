const assert = require ( 'assert' );
const loggers = require ( '../../index' );
const my_path = require ( 'path' );
debugger;
loggers.SuTry ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );