const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

const arr_names = Object.getOwnPropertyNames(s_Fs)
arr_names.map(item => arht.before (s_Fs[item] , module ))

const { s_writeFileSync, s_stats ,s_isFile } = s_Fs
debugger
// BOUNDEN CALL define module
// arht.before ( s_isFile, module );

// MODE for behavior
s_isFile.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
s_isFile.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

const res_1 = s_isFile ( Path.join ( __dirname, 'test_ini_module.js' ) ); // true
const res_2 = s_isFile ( Path.join ( __dirname ) ); // false (is dir)
const res_3 = s_isFile ( Path.join ( __dirname + 'r' ) ); // false (is error)


debugger
