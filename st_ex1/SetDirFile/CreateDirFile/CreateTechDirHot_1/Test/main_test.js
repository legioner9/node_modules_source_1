const Ex = require ( 'st_ex1' );
const createTechDirHot_1 = require ( 'st_ini' ).createTechDirHot_1;

createTechDirHot_1.mode = 'debug';
debugger
const dir_root = process.argv[2];
const dir_for_create = process.argv[3] || 'ROOT.dir';
console.log ( { dir_for_create } );
debugger
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];
const arr_creator = [[ dir_for_create, dir_for_create + '.md','ReadMe.md',['_src',0] ]];
createTechDirHot_1 ( dir_root, arr_creator );

process.exit ( 0 );


