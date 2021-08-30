const { createTechDir_4, debLog, debLogToFile, createArrLikeGit, createArrLikeGit_2 } = require ( 'st_ini' );

const CreateDirLikeGit_2 = ( dir_root, dev = { deb: false, log: false, logFs: true }) => {

    createTechDir_4.mode = dev;
    process['root_dir'] = dir_root;

    createTechDir_4 ( dir_root, createArrLikeGit_2 );
};
CreateDirLikeGit_2.help = `const { createTechDir_4, debLog, debLogToFile, createArrLikeGit, createArrLikeGit_2 } = require ( 'st_ini' );

const CreateDirLikeGit_2 = ( dir_root, dev = { deb: false, log: false, logFs: false }) => {

    createTechDir_4.mode = dev;
    process['root_dir'] = dir_root;

    createTechDir_4 ( dir_root, createArrLikeGit_2 );
};
`;

CreateDirLikeGit_2.call = () => console.log ( CreateDirLikeGit_2 );

module.exports = CreateDirLikeGit_2;
