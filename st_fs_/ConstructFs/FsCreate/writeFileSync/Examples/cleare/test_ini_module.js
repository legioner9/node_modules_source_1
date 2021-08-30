const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );

const { s_writeFileSync } = s_Fs;


// BOUNDEN CALL define module
// arht.before ( s_writeFileSync , module);

// MODE for behavior
// s_writeFileSync.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
s_writeFileSync.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

s_writeFileSync ( Path.join ( __dirname, 'file_for_test' ), 'content file_for_test\n' );

debugger
