const Ex = require ( 'st_ex1' );
const createTechDir_1 = require ( 'st_ini' ).createTechDir_1;

createTechDir_1.mode = 'debug';
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];
const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB',['BB','BBA','BBB'],['empty_dir']] ];
createTechDir_1 ( __dirname, arr_creator );




