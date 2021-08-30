const Fs = require ( 'fs' );
const Path = require ( 'path' );

const path_file_name = Path.join ( __dirname, 'read.txt' );

const DirMappingCloneFileToDir_2 = ( par ) => {
    const arr_dir = Fs.readdirSync ( par );
    const dev = DirMappingCloneFileToDir_2.mode === 'debug' || global.mode === 'debug';

    const res = arr_dir.map ( item => {

        if ( dev ) debugger
        const insp_arr = [ item.indexOf ( '_' ), item.indexOf ( '.dir' ), item.indexOf ( '.' ), item.indexOf ( '.md' ) ];
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
            if ( dev ) console.log ( `${ item } it's not MD file` );
            return item;
        }

        // it' our MD file

        if ( dev ) console.log ( `${ item } it' our MD file` );
        // 1.create ( par + item) Dir
        const create_dir = Path.join ( par, item + '.dir' );
        if ( dev ) console.log ( `${ create_dir } it' our create_dir` );

        if ( !Fs.existsSync ( create_dir ) ) {
            Fs.mkdir ( create_dir, err => {
                if ( err ) {
                    console.err ( err );
                }
            } );
        }

        // 2.create (__dirname + item)/_src

        const create_src = Path.join ( create_dir, '_src' );

        if ( dev ) console.log ( `${ !Fs.existsSync ( create_src ) } it' our !Fs.existsSync ( create_src )` );
        if ( !Fs.existsSync ( create_src ) ) {
            Fs.mkdir ( create_src, err => {
                if ( err ) {
                    console.err ( err );
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

DirMappingCloneFileToDir_2.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir_2.call = () => console.log ( DirMappingCloneFileToDir_2 );

DirMappingCloneFileToDir_2.mode = 'production';

module.exports = DirMappingCloneFileToDir_2;
