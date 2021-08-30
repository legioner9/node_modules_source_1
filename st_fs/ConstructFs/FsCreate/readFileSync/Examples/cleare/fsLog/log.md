
    RUN > Fs.readFileSync with:,
    path = E:\Node_projects\Node_Way\node_modules\st_fs\ConstructFs\FsCreate\readFileSync\Examples\cleare\test_ini_module.v.0.1.7_Education.js,
    data = const Path = require ( 'path' );

const { s_writeFileSync, s_readFileSync } = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

// BOUNDEN CALL define module
arht.before ( s_readFileSync, module );

// MODE for behavior
s_readFileSync.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
s_readFileSync.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

const res = s_readFileSync ( Path.join ( __dirname, 'test_ini_module.v.0.1.7_Education.js' ) );
const res_with_err = s_readFileSync ( Path.join ( __dirname+'eRR', 'test_ini_module.v.0.1.7_Education.js' ) );

debugger
,

    
