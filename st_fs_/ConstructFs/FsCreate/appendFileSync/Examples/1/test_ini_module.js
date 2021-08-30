const Path = require ( 'path' );

const { s_writeFileSync } = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

// BOUNDEN CALL define module
arht.before ( s_writeFileSync , module);

// MODE for behavior
// s_writeFileSync.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
// s_writeFileSync.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

s_writeFileSync ( Path.join ( __dirname+'e', 'file_for_test' ), 'content file_for_test\n' );

debugger
