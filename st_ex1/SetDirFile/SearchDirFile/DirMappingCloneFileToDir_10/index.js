const Fs = require ( 'fs' );
const Path = require ( 'path' );

const path_file_name = Path.join ( __dirname, 'read.txt' );

const DirMappingCloneFileToDir = ( par, extense = '.md' ) => {

    if ( DirMappingCloneFileToDir.dev ) debugger;
    if ( DirMappingCloneFileToDir.stack ) console.log ( `ModuleFunc is RUN` );

// MyModule.mode = { dev: false, log: false, logFs: false , stack: false};

    const arr_dir = Fs.readdirSync ( par );
    const dev = DirMappingCloneFileToDir.mode === 'debug' || global.mode === 'debug';

    const res = arr_dir.map ( item => {

        if ( dev ) debugger
        const insp_arr = [ item.indexOf ( '_' ), item.indexOf ( '.dir' ), item.indexOf ( '.' ), item.indexOf ( extense ) ];
        if ( insp_arr[0] === 0 || insp_arr[1] !== -1 ) {
            // it's mySpec
            if ( dev ) console.log ( `${ item } it's mySpec` );
            return item;
        }
        if ( insp_arr[2] === -1 ) {
            // it's work directory
            if ( dev ) console.log ( `${ item } it's work directory` );
            return item;
        }
        if ( insp_arr[3] === -1 ) {
            // it's not MD file
            if ( dev ) console.log ( `${ item } it's not ${ extense } file` );
            return item;
        }

        // it' our MD file

        if ( dev ) console.log ( `${ item } it' our ${ extense } file` );

        // 1. create ( par + item) Dir
        const create_dir = Path.join ( par, '.' + item + '.dir' );
        if ( dev ) console.log ( `${ create_dir } it' our create_dir` );

        if ( !Fs.existsSync ( create_dir ) ) {
            Fs.mkdir ( create_dir, err => {
                if ( err ) {
                    console.error ( err );
                }
            } );
        }
        // 0. create ( par + item) .md file
        const our_file = Path.join ( par, item );
        try {
            const data = Fs.readFileSync ( our_file );
            console.log ( data );

            const create_clone_md = Path.join ( par, '.' + item + '.dir', item + '.md' );

            Fs.writeFile ( create_clone_md, data, ( err ) => {
                if ( err ) {
                    console.error ( err );
                }
                //файл записан успешно
                if ( dev ) console.log ( `${ create_clone_md } file is create` );
            } );

        }
        catch (err) {
            console.error ( err );
        }

        const create_clone_md = Path.join ( par, '.' + item + '.md' );

        // 2.create (__dirname + item)/_src

        const create_src = Path.join ( create_dir, '_src' );

        if ( dev ) console.log ( `${ !Fs.existsSync ( create_src ) } it' our !Fs.existsSync ( create_src )` );
        if ( !Fs.existsSync ( create_src ) ) {
            Fs.mkdir ( create_src, err => {
                if ( err ) {
                    console.error ( err );
                }
            } );
        }

        // 3.create (__dirname  + item)/www.md

        const create_www = Path.join ( create_dir, 'www.md' );
        Fs.writeFile ( create_www, '', ( err ) => {
            if ( err ) {
                console.error ( err );
            }
            //файл записан успешно
            if ( dev ) console.log ( `${ create_www } file is create` );
        } );

        // 4.create (__dirname + item)/ReadMe.md

        const create_ReadMe = Path.join ( create_dir, 'ReadMe.md' );

        Fs.writeFile ( create_ReadMe, '', ( err ) => {
            if ( err ) {
                console.error ( err );
            }
            //файл записан успешно
            if ( dev ) console.log ( `${ create_ReadMe } file is create` );
        } );

    } );
};

DirMappingCloneFileToDir.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir.call = () => console.log ( DirMappingCloneFileToDir );

DirMappingCloneFileToDir.mode = 'production';

// MyModule.mode = { deb: false, log: false, logFs: false , stack: false};

module.exports = DirMappingCloneFileToDir;
