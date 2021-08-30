const {
    l_log,
    l_log_deb,
    l_deb,
    l_fsLog,
    dirDeepOptions,
} = require ( 'st_ini_deep1' )

const Fs = require ( 'fs' );
const Path = require ( 'path' );

// MODE.mode = { deb: false, log: false, logFs: false, stack: false };

/**
 * create_file in parent dir with name = adding
 * @param parent_path
 * @param adding
 * @param dev = production or debug
 */
const create_file = ( parent_path, adding, dev ) => {

    // if ( dev ) debugger
    // // create parent_path/adding file
    // if ( dev ) {
    //     console.log ( `parent_path = "${ parent_path }"
    //     adding = "${ adding }"` );
    //     debugger
    // }



    const path_file = Path.join ( parent_path, adding.toString() );
    try {
        Fs.writeFileSync ( path_file, '' );
        if ( dev ) {
            console.log ( `"${ path_file }" file is create` );
            debugger
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

    const path_dir = Path.join ( parent_path, adding.toString() );

    try {
        if ( !Fs.existsSync ( path_dir ) ) {
            Fs.mkdirSync ( path_dir );
            if ( dev ) {
                console.log ( `"${ path_dir }" dir is create` );
                debugger
            }
        }
    }
    catch (e) {
        console.error ( e );
    }

    return path_dir;
};


const Arht = require ( 'st_ini_arht' );
const atOutFm = Arht.atOut_fm;

const fn = () => {

    const ENV = atOutFm.at ( fn );



    // DODY of function

    // // start signal of fn
    // fn.event.emit ( 'start', ENV );
    //
    // // push innerState - example ENV:
    // fn.event.emit ( 'innerState', fn.innerState );
    //
    // // pull externalState
    // fn.event.on ( 'externalState', d => { // d typeof Object
    //     fn.exterState = d;
    // } );

    // USE ENV.MODE :
    // fn.l_fsLog ( ENV.MODE, 'fn.l_fsLog => RUN main tread', ENV.MODULE.path );
    // fn.l_deb ( ENV.MODE );
    // fn.l_log ( ENV.MODE, 'fn.l_log => RUN main tread' );
    // fn.l_log_deb ( ENV.MODE, 'fn.l_log_deb => RUN main tread' );
    // fn.dirDeepOptoins ( ENV );
    debugger
};
atOutFm.prop ( fn );

atOutFm.out ( fn );
// -------------------------------------
// NEED atOutFm.path for l_logFs run flow
// atOutFm.before( fn , module)

// -------------------------------------
// possible subscription for start fn :
// fn.event.on ('start', d => fn.dirDeepOptoins(d))

// define behavior MODE
// fn.mode.logFs = true;
// fn.mode.log = true;
// fn.mode.deb = true;
// fn.mode.debLog = true;

module.exports = fn;
