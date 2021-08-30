const Fs = require ( 'fs' );
const Path = require ( 'path' );

const L_fsLogErr = (
    dev = {
        deb: false,
        log: false,
        logFs: false
    },
    data = '',
    root_dir = __dirname,
    [ log_dir_name, log_file_name ] = [ 'fsLog', 'logErr.md' ] ) => {

    const dir_path = Path.join ( root_dir, log_dir_name );
    const file_path = Path.join ( root_dir, log_dir_name, log_file_name );

    try {
        // inner log : MAY BY COMMENTED-------------------
        // console.log ( 'L_fsLogErr is run with parameters :', { dev, data, root_dir }, log_dir_name, log_file_name );
        //* console.log ( 'L_fsLogErr is run with parameters :', dev, root_dir , log_dir_name, log_file_name );
        // -----------------------------------------------
        try {

            // create dir_path
            if ( !Fs.existsSync ( dir_path ) ) {

                Fs.mkdirSync ( dir_path );

            }

            // check first start L_fsLog with file_path
            if ( !L_fsLogErr.file_path[file_path] ) {

                // clear file_path at first start

                Fs.writeFileSync ( file_path, '' );

                // fix first start
                L_fsLogErr.file_path[file_path] = true;
            }
        }
        catch (e) {
            console.error ( e );
        }

        Fs.appendFileSync ( file_path, data + '\n' );
    }
    catch (e) {
        console.error ( e );
    }

};

// counter preparation for future
L_fsLogErr.count = 0;

// create L_fsLog.file_path global variable
L_fsLogErr.file_path = {};

L_fsLogErr.help = `const Fs = require ( 'fs' );

const L_fsLog = ( dev = {
    deb: false,
    log: false,
    logFs: false
}, data = '', root_dir = __dirname, [ log_dir_name, log_file_name ] = [ 'fsLog', 'log.md' ] ) => {
    if ( dev.deb ) debugger;

    try {
        if ( dev.log ) console.log ( 'L_fsLog is run', { dev, data, root_dir }, log_dir_name, log_file_name );
        if ( !L_fsLog.count ) {
            const dir_path = Fs.join ( root_dir, log_dir_name );
            if ( !Fs.existsSync ( dir_path ) ) {
                if ( dev.logFs ) Fs.mkdirSync ( dir_path );
            }

            // Fs.writeFileSync ( path, '' );
            // return
        }

        L_fsLog.count++;
        if ( dev.logFs ) Fs.appendFileSync ( Fs.join ( dir_path, log_file_name ), data );
    }
    catch (e) {
        console.error ( e );
    }

};`;

L_fsLogErr.call = () => console.log ( L_fsLogErr );

module.exports = L_fsLogErr;
