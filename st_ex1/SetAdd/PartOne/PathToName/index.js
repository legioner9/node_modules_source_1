const PathToName = function ( path ) {

    const my_path = require ( 'path' );

    const ppar = my_path.parse ( path );
    const file_name = ppar.name;
    const arr_dir = ppar.dir.split ( my_path.sep );
    const pdir = arr_dir[arr_dir.length - 1];
    return [ pdir, file_name ].join ( '_' );
};
PathToName.help = `ModuleFunc = () => {}`;

PathToName.call = () => console.log ( PathToName );

module.exports = PathToName;