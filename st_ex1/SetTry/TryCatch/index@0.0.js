const SuLogToFile = require ( '../../SetLoggers/LogTo' );

const SuTry = ( fn ) => ( file, dir, ...args ) => {




    try {
        fn ( ...args );
    }
    catch (e) {
        const str = `${ JSON.stringify ( e ) }
    ${ e.stack }
    
    ${ new Date () }`;
        SuLogToFile ( str, file, dir );
    }
};
// SuTry ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );
module.exports = SuTry;