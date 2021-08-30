const fs = require ( 'fs' );
const path = require ( 'path' );

const path_file_name = path.join ( __dirname, 'read.txt' );

const DirMappingCloneFileToDir = ( par ) => {
    const div = DirMappingCloneFileToDir.debugMode;
    if ( div ) debugger;
    return fs.readdirSync ( par );
};

DirMappingCloneFileToDir.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir.call = () => console.log ( DirMappingCloneFileToDir );

DirMappingCloneFileToDir.mode = 'production';

module.exports = DirMappingCloneFileToDir;
