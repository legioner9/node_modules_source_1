const Ex = require ( 'st_ex1' );
const createTechDir_4 = require ( 'st_ini' ).createTechDir_4;
const createArrLikeGit_2= require ( 'st_ini' ).createArrLikeGit_2;

createTechDir_4.mode = { deb: true, log: false, logFs: false };

createTechDir_4 ( __dirname, createArrLikeGit_2 );




