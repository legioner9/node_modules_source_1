const Fs = require ( 'fs' );
const Path = require ( 'path' );

/**
 * dataFileToArr
 * @param d
 * @param debug
 * @returns {string[]}
 */
const dataFileToArr = ( d, debug ) => {
    if ( debug ) debugger
    return d.toString ().split ( '\n' ).map ( item => item
        .trimEnd ()
        .replace ( /\s/g, '_' )
        .replace ( /\?/g, '&' )
    );
};

/**
 *
 * @param d
 * @param debug
 */
const dataMDFileToArr_deep_2 = ( d, debug ) => {
    if ( debug ) debugger
    const arr_init = d.toString ().split ( '\n' )
        .map ( item => item
            .trimEnd ()
            .replace ( /\s/g, '_' )
            .replace ( /\?/g, '&' )
        )
        .filter ( d => d.match ( /^#{1}_/ ) || d.match ( /^#{2}_/ ) );

    if ( debug ) console.log ( `"${ arr_init }"  is "arr_init"` );
    return arr_init;
};

/**
 * create_file in parent dir with name = adding
 * @param parent_path
 * @param adding
 * @param dev = production or debug
 */
const create_file = ( parent_path, adding, dev ) => {

    if ( dev ) debugger
    // create parent_path/adding file

    const path_file = Path.join ( parent_path, adding );
    Fs.writeFile ( path_file, '', ( err ) => {
        // error
        if ( err ) {
            console.error ( err );
        }
        // success
        if ( dev ) console.log ( `"${ path_file }" file is create` );
    } );
};

/**
 * create_dir in parent dir with name = adding
 * @param parent_path
 * @param adding
 * @param dev = production or debug
 * @returns {string}
 */
const create_dir = ( parent_path, adding, dev ) => {

    if ( dev ) debugger
    // create parent_path/adding dir

    const path_dir = Path.join ( parent_path, adding );

    if ( !Fs.existsSync ( path_dir ) ) {
        Fs.mkdir ( path_dir, err => {
            // error
            if ( err ) {
                console.error ( err );
            }
            // success
            if ( dev ) console.log ( `"${ path_dir }" file is create` );
        } );
    }
    return path_dir;
};

/**
 *
 * @param parent_path
 * @param item
 * @param index
 * @param arr_init
 * @param dev
 */
const create_level_1 = ( parent_path, item, index, arr_init, dev ) => {

    const item_clear = item.replace ( /^#_/, '' );
    if ( dev ) {
        if ( dev ) console.log ( `${ item_clear } = "item_clear"` );
        debugger;
    }
    // const path_depth_1 = Path.join ( parent_path, item_clear );

    create_file ( parent_path, item_clear + '.md', dev );

    const path_dir_item = create_dir ( parent_path, item_clear + '.dir', dev );

    create_file ( path_dir_item, 'ReadMe.md', dev );

    const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );

    create_file ( path_dir_item_src, '0', dev );

    const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );

    create_file ( path_dir_item_www, 'www.md', dev );

    const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );

    create_file ( path_dir_item_www_src, '0', dev );

};
/**
 *
 * @param parent_path
 * @param item
 * @param index
 * @param arr_init
 * @param dev
 */
const create_level_2 = ( parent_path, item, index, arr_init, dev ) => {

    const dir_to_item = arr_init[index - 1].replace ( /^#_/, '' );

    const item_clear = item.replace ( /^##_/, '' );

    if ( dev ) {
        if ( dev ) console.log ( `${ item_clear } = "item_clear_2"
        ${ dir_to_item } = "dir_to_item"` );
        debugger;
    }

    const path_depth_2 = Path.join ( parent_path, dir_to_item + '.dir');

    create_file ( path_depth_2, item_clear + '.md', dev );

    const path_dir_item = create_dir ( path_depth_2, item_clear + '.dir', dev );

    create_file ( path_dir_item, 'ReadMe.md', dev );

    const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );

    create_file ( path_dir_item_src, '0', dev );

    const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );

    create_file ( path_dir_item_www, 'www.md', dev );

    const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );

    create_file ( path_dir_item_www_src, '0', dev );

};

/**
 * cloneDirStructFromArr
 * @param parent_path
 * @param arr_init
 * @param dev = production or debug
 */
const cloneDirStructFromArr_deep_2 = ( parent_path, arr_init, dev ) => {
    arr_init.map ( ( item, index, arr ) => {

        if ( dev ) {
            console.log ( { item, index, arr } );
            debugger
        }

        if ( item.trim () === '' ) return;

        // d.match ( /^#{1}_/ ) || d.match ( /^#{2}_/ )

        if ( item.match ( /^#{1}_/ ) ) {
            create_level_1 ( parent_path, item, index, arr_init, dev );
        }

        if ( item.match ( /^#{2}_/ ) ) {
            create_level_2 ( parent_path, item, index, arr_init, dev );
        }

        // create_file ( parent_path, item + '.md', dev );
        //
        // const path_dir_item = create_dir ( parent_path, item + '.dir', dev );
        //
        // create_file ( path_dir_item, 'ReadMe.md', dev );
        //
        // const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );
        //
        // create_file ( path_dir_item_src, '0', dev );
        //
        // const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );
        //
        // create_file ( path_dir_item_www, 'www.md', dev );
        //
        // const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );
        //
        // create_file ( path_dir_item_www_src, '0', dev );

    } );
};

/**
 *
 * @param par
 * @constructor
 * @param name_init_file
 */
const DirMappingCloneFileToDir_4 = ( par, name_init_file ) => {

    const dev = DirMappingCloneFileToDir_4.mode === 'debug' || global.mode === 'debug';

    if ( dev ) debugger

    // read file to data

    const path_to_list = Path.join ( par, name_init_file );
    if ( dev ) console.log ( `${ path_to_list } = "path_to_list"` );

    Fs.readFile ( path_to_list, ( err, data ) => {
        if ( err ) {
            console.error ( err );
            return;
        }

        if ( dev ) console.log ( `${ data } = "file data"` );

        // create arr from data

        const res_arr = dataMDFileToArr_deep_2 ( data, dev );

        if ( dev ) {
            console.log ( `${ res_arr } = "res_arr"` );
            debugger
        }

        // create file structure from arr

        cloneDirStructFromArr_deep_2 ( par, res_arr, dev );

    } );
};

DirMappingCloneFileToDir_4.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir_4.call = () => console.log ( DirMappingCloneFileToDir_4 );

DirMappingCloneFileToDir_4.mode = 'production';

module.exports = DirMappingCloneFileToDir_4;
