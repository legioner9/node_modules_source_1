const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );

const { s_writeFileSync, s_readdirSync } = s_Fs;

// BOUNDEN CALL define module
// arht.before ( s_readFileSync, module );

// MODE for behavior
s_readdirSync.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
s_readdirSync.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

const result_read = s_readdirSync ( Path.join ( __dirname, 'ROOT.dir' ) );
const arr_to_compare = [ "ReadMe.md", "ROOT.dir.md", "_src" ];

const assert = require ( 'assert' ).strict;

debugger
try {

    assert.deepEqual ( result_read, arr_to_compare );
    console.log ( 'test CreateTechDirHot_1 well done)))' );
    process.exit ( 1 );
}
catch (e) {
    console.log ('test CreateTechDirHot_1 fal ((( ', e.message );
    process.exit ( 1 );
}
debugger