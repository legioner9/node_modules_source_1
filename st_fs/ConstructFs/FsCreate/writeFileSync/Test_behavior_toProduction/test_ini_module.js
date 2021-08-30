const Path = require ( 'path' );

const { s_writeFileSync } = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

arht.before ( s_writeFileSync );

s_writeFileSync ( Path.join ( __dirname, 'file_for_test' ), 'content file_for_test\n' );

debugger
