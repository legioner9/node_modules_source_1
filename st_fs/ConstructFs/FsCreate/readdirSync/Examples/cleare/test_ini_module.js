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

const res = s_readdirSync ( __dirname );
const res_with_err = s_readdirSync ( __dirname + 'eRR' );
debugger
