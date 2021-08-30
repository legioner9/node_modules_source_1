const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );

const funcExamp = require ( '../../index' );
arht.before ( funcExamp ,module);

// MODE for behavior
// funcExamp.mode.log = true;
// funcExamp.mode.deb = true;
// funcExamp.mode.debLog = true;
funcExamp.mode.logFs = true;
// funcExamp.mode.stack = true;

funcExamp ();

debugger
