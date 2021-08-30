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
 * cloneDirStructFromArr
 * @param parent_path
 * @param arr_init
 * @param dev = production or debug
 */
const cloneDirStructFromArr = ( parent_path, arr_init, dev ) => {
    arr_init.map ( item => {

        if ( item.trim () === '' ) return;

        // create_file ( parent_path, item + '.md', dev );

        const path_dir_item = create_dir ( parent_path, item + '.dir', dev );

        create_file ( path_dir_item, 'ReadMe.md', dev );

        const path_dir_item_src = create_dir ( path_dir_item, '_src', dev );

        create_file ( path_dir_item_src, '0', dev );

        const path_dir_item_www = create_dir ( path_dir_item, 'www', dev );

        create_file ( path_dir_item_www, 'www.md', dev );

        const path_dir_item_www_src = create_dir ( path_dir_item_www, '_src', dev );

        create_file ( path_dir_item_www_src, '0', dev );

    } );
};

/**
 *
 * @param par
 * @constructor
 */
const DirMappingCloneFileToDir_3 = ( par ) => {
    const arr_dir = Fs.readdirSync ( par );
    const dev = DirMappingCloneFileToDir_3.mode === 'debug' || global.mode === 'debug';

    // create arr content only .md filename

    const res_arr = arr_dir.map ( item => {

        // search any .md files

        if ( dev ) debugger
        const insp_arr = [ item.indexOf ( '_' ), item.indexOf ( '.dir' ), item.indexOf ( '.' ), item.indexOf ( '.md' ) ];
        if ( insp_arr[0] === 0 || insp_arr[1] !== -1 ) {
            // it's mySpec
            if ( dev ) console.log ( `${ item } it's mySpec` );
            return;
        }
        if ( insp_arr[2] === -1 ) {
            // it's work directory
            if ( dev ) console.log ( `${ item } it's work directory` );
            return;
        }
        if ( insp_arr[3] === -1 ) {
            // it's not MD file
            if ( dev ) console.log ( `${ item } it's not MD file` );
            return;
        }

        // it' our .md item
        return item;

    } );

    const res_arr_clear = res_arr.filter ( d => d );

    if ( dev ) {
        console.log ( `${ res_arr_clear } it's "res_arr_clear"` );
        debugger;
    }

    cloneDirStructFromArr ( par, res_arr_clear, dev );

};

DirMappingCloneFileToDir_3.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir_3.call = () => console.log ( DirMappingCloneFileToDir_3 );

DirMappingCloneFileToDir_3.mode = 'production';

module.exports = DirMappingCloneFileToDir_3;
