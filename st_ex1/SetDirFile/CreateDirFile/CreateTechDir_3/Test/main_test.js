const Ex = require ( 'st_ex1' );
const createTechDir_3 = require ( 'st_ini' ).createTechDir_3;

createTechDir_3.mode = 'debug';
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];
const arr_creator = [ 'A', 'B', [ 'B0', 'BA' ,'BB',['BB0','BBA','BBB'],['empty_dir']] ];
createTechDir_3 ( __dirname, arr_creator );

// const _src = [ '_src' ];
//
// //const Common_this = [ 'Common_this', 'Common_this.md','ReadMe.md',
// //   _src ];
// //'Common_this.md','ReadMe.md' - create automatically
//
// const Common_this = [ 'Common_this',
//     _src ];
// const Docs_this = [ 'Docs_this',
//     _src ];
// const www_this = [ 'www_this',
//     _src ];
//
// const Live_learn = [ 'Live_learn',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const the_part_of_this = [ 'the_part_of_this',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const Point_learn = [ 'Point_learn',
//     the_part_of_this ];
//
// const Intro = [ 'Intro',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const Use_this = [ 'Use_this',
//     [ 'First_steps', _src ],
//     [ 'Hints', _src ] ];
//
// const Workout_this = [ 'Workout_this', _src ];


