const Fs = require ( 'fs' );
const Path = require ( 'path' );

const Ini_deep = require ( 'st_ini_deep1' );
const { l_log, l_deb, l_log_deb, l_fsLog } = Ini_deep;

// const l_log = ( dev, ...args ) => {
//     if ( dev.log ) console.log ( ...args );
// };
// const l_log_deb = ( dev, str ) => {
//     if ( dev.log ) console.log ( str );
//
//     if ( dev.deb ) debugger;
// };
// const l_deb = ( dev ) => {
//     if ( dev.deb ) debugger;
// };

/**
 * create_file in parent dir with name = adding
 * @param parent_path
 * @param adding
 * @param dev = production or debug
 */
const create_file = ( parent_path, adding, dev ) => {

    // create parent_pa th/adding file

    const path_file = Path.join ( parent_path, adding );
// if dir not exist - dont write file
    let if_exist_dir = true;
    if ( !Fs.existsSync ( parent_path ) ) {
        if_exist_dir = false;
    }

    // if file exist - don't rewrite
    let if_exist_file = false;
    try {
        Fs.readFileSync ( path_file );
    }
    catch (err) {
        if_exist_file = true;
        l_log ( dev, `"${ path_file }" file isn't exist` );
    }

    try {

        if ( if_exist_file && if_exist_dir ) {
            Fs.writeFileSync ( path_file, '' );

            l_log_deb ( dev, `"${ path_file }" file is create` );
            l_fsLog ( dev, `"${ path_file }" file is create\n`, process['root_dir'] );
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

    // create parent_path/adding dir

    const path_dir = Path.join ( parent_path, adding );

    try {
        if ( !Fs.existsSync ( path_dir ) ) {
            Fs.mkdirSync ( path_dir );

            l_log ( dev, `"${ path_dir }" dir is create` );
            l_fsLog ( dev, `"${ path_dir }" dir is create\n`, process['root_dir'] );
            create_file ( path_dir, adding + '.md', dev );
            create_file ( path_dir, 'ReadMe.md', dev );
        }
    }
    catch (e) {

        l_log ( dev, `"${ e }" dir is not create` );

    }

    return path_dir;
};

/**
 *
 * @param parent_path
 * @param create_arr
 */
const CreateTechDir_4 = ( parent_path, create_arr ) => {

    // if ( ModuleFunc.dev ) debugger;
    // if ( ModuleFunc.stack ) console.log ( `ModuleFunc is START RUN` );

    const dev = CreateTechDir_4.mode;
    l_log_deb ( dev, [ parent_path, create_arr ] );
    l_fsLog ( dev, `   ++++
        parent_path = 
        "${ parent_path }"` );
    create_arr.forEach ( ( item, index, arr ) => {
        l_log ( dev, [ item, index, arr ] );
        if ( !Array.isArray ( item ) ) {
            create_file ( parent_path, item, dev );
            return;
        }
        const item_0 = item[0];
        l_fsLog ( dev, `    ----
           create_arr after = 
           "${ create_arr }"
        item_0 = "${ item_0 }"
         to Path.join`, process['root_dir'] );
        if ( !item_0 ) debugger
        const parent_path_deep = Path.join ( parent_path, item_0 );
        create_dir ( parent_path, item_0, dev );
        item.shift ();
        CreateTechDir_4 ( parent_path_deep, item, dev );

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
    // TODO: implement api.dom.confirmation
};

CreateTechDir_4.help = `ModuleFunc = () => {}`;

CreateTechDir_4.call = () => console.log ( CreateTechDir_4 );

CreateTechDir_4.mode = {};

// MyModule.mode = { dev: false, log: false, logFs: false , stack: false};

module.exports = CreateTechDir_4;

// todo: fix behavior logFs: true => err write in file Log


