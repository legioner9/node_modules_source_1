const Fs = require ( 'fs' );
const Path = require ( 'path' );

let path_to_depth = '';

/**
 * dataFileToArr
 * @param d
 * @param dev
 * @returns {string[]}
 */
const dataFileToArr = ( d, dev ) => {
    if ( dev ) debugger
    return d.toString ().split ( '\n' ).map ( item => item
        .trimEnd ()
        .replace ( /\s/g, '_' )
        .replace ( /\?/g, '&' )
    );
};

/**
 *
 * @param d
 * @param dev
 */
const dataMDFileToArr_deep_2 = ( d, dev ) => {
    if ( dev ) debugger
    const arr_init = d.toString ().split ( '\n' )
        .map ( item => item
            .trimEnd ()
            .replace ( /\s/g, '_' )
            .replace ( /\?/g, '&' )
        )
        .filter ( d => d.match ( /^##_/ ) || d.match ( /^###_/ ) );

    if ( dev ) console.log ( `"${ arr_init }"  is "arr_init"` );

    let i = 1;
    let j = 1;
    let k = 1;
    const arr_init_to_num = arr_init.map ( ( item, index, arr ) => {
        if ( item.match ( /^##_/ ) ) {
            const item_to_num = item.replace ( /^##_/, `##_${ i }.` );
            i++;
            j = 1;
            k = i - 1;
            if ( dev ) {
                console.log ( { i, j, k, item_to_num } );
                debugger
            }
            return item_to_num;
        }
        if ( item.match ( /^###_/ ) ) {
            const item_to_num_num = item.replace ( /^###_/, `###_${ k }.${ j }.` );
            j++;
            if ( dev ) {
                console.log ( { i, j, k, item_to_num_num } );
                debugger
            }
            return item_to_num_num;
        }
    } );

    if ( dev ) {
        console.log ( `"${ arr_init_to_num }"  is "arr_init_to_num"` );
        debugger
    }

    return arr_init_to_num;
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
const create_level_1_from2 = ( parent_path, item, index, arr_init, dev ) => {

    const item_clear = item.replace ( /^##_/, '' )
        .replace ( /[<>:«/\\\|\?\*"]/g, '' );
    if ( dev ) {
        if ( dev ) console.log ( `${ item_clear } = "item_clear"` );
        debugger;
    }
    // const path_depth_1 = Path.join ( parent_path, item_clear );

    const path_dir_item = create_dir ( parent_path, item_clear + '.dir', dev );

    // memorize path_to_depth

    path_to_depth = path_dir_item;

    create_file ( path_dir_item, item_clear + '.md', dev );

    if ( dev ) return;

    create_file ( path_dir_item, 'ReadMe.md', dev );

    const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );

    create_file ( path_dir_item_src, '1.js', dev );
    create_file ( path_dir_item_src, '1.html', dev );
    create_file ( path_dir_item_src, 'Readme.md', dev );

    const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );

    create_file ( path_dir_item_www, 'www.md', dev );

    const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );

    create_file ( path_dir_item_www_src, 'Readme.md', dev );

};
/**
 *
 * @param parent_path
 * @param item
 * @param index
 * @param arr_init
 * @param dev
 */
const create_level_2_from2 = ( parent_path, item, index, arr_init, dev ) => {
    if ( dev ) debugger
    // const dir_to_item = arr_init[index - 1].replace ( /^##_/, '' );

    const item_clear = item.replace ( /^###_/, '' )
        .replace ( /[<>:«/\\\|\?\*"]/g, '' );
    if ( dev ) {
        if ( dev ) console.log ( `${ item_clear } = "item_clear_2"
        ${ parent_path } = "dir_to_item"` );
        debugger;
    }

    // const path_depth_2 = Path.join ( parent_path, dir_to_item + '.dir' );

    if ( dev ) return;

    const path_dir_item = create_dir ( parent_path, item_clear + '.dir', dev );

    create_file ( path_dir_item, item_clear + '.md', dev );

    create_file ( path_dir_item, 'ReadMe.md', dev );

    const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );

    create_file ( path_dir_item_src, '1.js', dev );
    create_file ( path_dir_item_src, '1.html', dev );
    create_file ( path_dir_item_src, 'Readme.md', dev );

    const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );

    create_file ( path_dir_item_www, 'www.md', dev );

    const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );

    create_file ( path_dir_item_www_src, 'Readme.md', dev );

};

/**
 * cloneDirStructFromArr
 * @param parent_path
 * @param arr_init
 * @param dev = production or debug
 */
const cloneDirStructFromArr_deep_2 = ( parent_path, arr_init, dev ) => {
    arr_init.map ( ( item, index, arr_init ) => {

        if ( dev ) {
            console.log ( { item, index, arr: arr_init } );
            debugger
        }

        if ( item.trim () === '' ) return;

        // d.match ( /^#{1}_/ ) || d.match ( /^#{2}_/ )

        if ( item.match ( /^##_/ ) ) {

            // const item_clear = item.replace ( /^##_/, '' );
            // if ( dev ) {
            //     if ( dev ) console.log ( `${ item_clear } = "item_clear"` );
            //     debugger;
            // }
            // path_to_depth = Path.join ( parent_path, item_clear );

            create_level_1_from2 ( parent_path, item, index, arr_init, dev );
        }

        if ( item.match ( /^###_/ ) ) {
            create_level_2_from2 ( path_to_depth, item, index, arr_init, dev );
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
const DirMappingCloneFileToDir_7 = ( par, name_init_file ) => {

    const dev = DirMappingCloneFileToDir_7.mode === 'debug' || global.mode === 'debug';

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

DirMappingCloneFileToDir_7.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir_7.call = () => console.log ( DirMappingCloneFileToDir_7 );

DirMappingCloneFileToDir_7.mode = 'production';

module.exports = DirMappingCloneFileToDir_7;
