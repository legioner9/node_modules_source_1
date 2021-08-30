const SuLogToFile = require ( '../../SetLoggers/LogTo/index@0.1' );
const assert = require ( 'assert' );

const SuTry = ( fn ) => ( file, dir, ...args ) => {
    try {
        fn ( ...args );
    }
    catch (e) {
        const str = `${ JSON.stringify ( e ) }
    
    ${ new Date () }`;
    //--- it's enlarged format "str"---
    //     const str = `${ JSON.stringify ( e ) }
    // ${ e.stack }
    //
    // ${ new Date () }`;
        SuLogToFile ( str, file, dir );
    }
};

SuTry.help = `'#to_cons'
SuTry ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );`;

module.exports = SuTry;