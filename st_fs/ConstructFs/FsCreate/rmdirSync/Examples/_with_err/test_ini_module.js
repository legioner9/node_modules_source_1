const Path = require ( 'path' );

const { s_writeFileSync, s_stats } = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );
debugger
// BOUNDEN CALL define module
arht.before ( s_stats, module );

// MODE for behavior
s_stats.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
s_stats.mode.logFs = true;
// s_writeFileSync.mode.stack = true;

const res = s_stats ( Path.join ( __dirname + 'r', 'test_ini_module.js' ) );

// res.isFile() not exist - res is not obj stats
debugger
