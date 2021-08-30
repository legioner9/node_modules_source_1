const Fs = require ( 'fs' );
const Path = require ( 'path' );

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

    // if file exist - don't rewrite
    let if_exist = false;
    try {
        Fs.readFileSync ( path_file );
    }
    catch (err) {
        if_exist = true;
        if ( dev )console.log(`"${ path_file }" file isn't exist` );
    }

    try {
        if(if_exist) {
            Fs.writeFileSync ( path_file, '' );
            if ( dev ) {
                console.log ( `"${ path_file }" file is create` );
                debugger
            }
        }
    }
    catch (e) {
        console.error ( e );
    }
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

    try {
        if ( !Fs.existsSync ( path_dir ) ) {
            Fs.mkdirSync ( path_dir );
            if ( dev ) {
                console.log ( `"${ path_dir }" dir is create` );
                debugger
            }
            create_file ( path_dir, adding + '.md', dev );
            create_file ( path_dir, 'ReadMe.md' + '.md', dev );
        }
    }
    catch (e) {
        console.error ( e );
    }

    return path_dir;
};

/**
 *
 * @param parent_path
 * @param create_arr
 */
const CreateTechDir_3 = ( parent_path, create_arr ) => {
    const dev = CreateTechDir_3.mode === 'debug' || global.mode === 'debug';
    create_arr.forEach ( ( item, index, arr ) => {
        if ( !Array.isArray ( item ) ) {
            create_file ( parent_path, item, dev );
            return;
        }
        const item_0 = item[0];
        const parent_path_deep = Path.join ( parent_path, item_0 );
        create_dir ( parent_path, item_0, dev );
        item.shift ();
        if ( dev ) debugger;
        CreateTechDir_3 ( parent_path_deep, item, dev );

    } );

    // const name_level_1_1 = 'init';
    //
    // create_file ( parent_path, name_level_1_1 + '.md', dev );
    //
    // const path_dir_item = create_dir ( parent_path, name_level_1_1 + '.dir', dev );
    //
    // if ( dev ) return;
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

};

CreateTechDir_3.help = `ModuleFunc = () => {}`;

CreateTechDir_3.call = () => console.log ( CreateTechDir_3 );

CreateTechDir_3.mode = 'production';

module.exports = CreateTechDir_3;

