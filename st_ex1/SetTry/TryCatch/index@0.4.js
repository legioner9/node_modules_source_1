const LogTo = require ( '../../SetLoggers/LogTo/index@0.4' );
const assert = require ( 'assert' );

const TryCatch = ( fn ) => ( file, dir, ...args ) => {
    try {
        fn ( ...args );
    }
    catch (e) {
        return LogTo ( e, file, dir );
    }
};

TryCatch.help = `'#to_ret': TryCatch ( assert.strictEqual ) ( '#to_ret', null, 3, 5 );
'#to_consMes': TryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5 );
'#to_consJson': TryCatch ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );
'any': TryCatch ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );`;

TryCatch.call = () => console.log ( TryCatch );

module.exports = TryCatch;