// issue node_modules/st_doc1/nodejs.org_DOCS.v.2/CommandLine/Way/ques_3.js
// cat ~/.bashrc
// QMR_1_d1(){
//
//     # полный путь до скрипта
//     #	ABSOLUTE_FILENAME=`readlink -e "$0"`
//     # каталог в котором лежит скрипт
//     #	DIRECTORY=`dirname "$ABSOLUTE_FILENAME"` => 'C:/Program Files/Git/usr/bin'
//
//
//     node /E/Node_projects/Node_Way/node_modules/st_ex1_up1/SetCLI/QuesMenuRun/QMR_1_d1/index.js $(pwd) "$@"
// }

console.log ( `stack : run QMR_2_d1/index.js\"` );

const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );

const { createTechDir_4, debLog, debLogToFile, createArrLikeGit_2_v_2 } = require ( 'st_ini' );

createTechDir_4.mode = 'debug';

const consoleDirDeep = Ex.SetConsole.ConsoleDir.ObjectDeepOptoins;

// consoleDirDeep(createArrLikeGit_2_v_2)

const QMR_2_d1 = () => {
    // if ( ModuleFunc.dev ) debugger;
    // if ( ModuleFunc.stack ) console.log ( `ModuleFunc is RUN` );

    const DIR_PATH = process.argv[2];
    const ARGV_3 = process.argv[3];

    // check exist argument bash RUN

    // if ( !ARGV_3 ) {
    //     console.log ( 'Argument not exist - dont forget! Bay(((' );
    //     process.exit ( 0 );
    // }

    // check type argument bash RUN

    // debugger
    const dev = false;

    // password
    const ADM_PASS = 'qwe';

    // init file_global
    let treat_menu = {};

    if ( dev ) {
        console.log ( `RUN createTechDir_1 with DIR_PATH = ${ DIR_PATH } ,
     ARGV_3 = ${ ARGV_3 }` );
    }

// simple hello
    const write = s => process.stdout.write ( s );
    write ( 'Enter your name:' );

    const handler_data_admin = ( d ) => {

    };

    const handler_data_user = ( d ) => {

    };

    const hello_admin = () => {
        return 'Ave, admin';
    };

    const hello_user = () => {
        return 'Hi, user';
    };

    const f_help = () => {
        write ( `run is  run` );
    };

    const f_exit = () => {
        write ( 'Bay (((\n' );
        process.exit ( 0 );
    };

    const f_run = () => {
        consoleDirDeep ( ARGV_3 );

        // const create_arr = JSON.parse ( ARGV_3 );
        const arr_arr = [ 'AA', 'BB' ];
        consoleDirDeep ( arr_arr );
        consoleDirDeep ( DIR_PATH );

        console.log ( Array.isArray ( arr_arr ) );
        // console.log ( Array.isArray ( create_arr ) );

        createTechDir_4 ( DIR_PATH, createArrLikeGit_2_v_2 );
        setTimeout ( () => {
            write ( 'well done!)))\n' );
            process.exit ( 0 );
        }, 100 );
    };

    const common_clarifications = () => {
        return `[h]elp,
    [e]xit,`;
    };
    const admin_clarifications = () => {
        treat_menu = {
            'h': f_help,
            'e': f_exit,
            'r': f_run,
        };
        return `${ common_clarifications () }
    [r]un create what ?
    `;

    };

    const user_clarifications = () => {
        treat_menu = {
            'h': f_help,
            'e': f_exit,
        };
        common_clarifications ();
    };

    const check_if_d = ( d, if_d, dev ) => {
        if ( dev ) write ( ` d = ${ d } ${ typeof d }
if_id = ${ if_d } ${ typeof if_d }
if  = ${ d === if_d }
  ` );
    };

    const first_admin_menu = () => {
        write ( admin_clarifications () );
        process.stdin.once ( 'data', chunk => {
            const data = chunk.toString ().trim ();

            if ( treat_menu[data] ) {
                treat_menu[data] ();
                first_admin_menu ();
            }
            else {
                write ( `command out of list : repeat or exit\n` );
                first_admin_menu ();
            }

        } );
    };

    const treat_password = ( d ) => {
        check_if_d ( d + '', ADM_PASS + '', dev );

        if ( d === ADM_PASS ) {
            write ( 'Ave admin!\n' );
            first_admin_menu ();
        }
        else {
            write ( 'WTF?' );
            process.exit ( 0 );
        }
    };

    const enter_password = () => {
        write ( 'Enter your password:' );
        process.stdin.once ( 'data', chunk => {
            const data = chunk.toString ().trim ();
            write ( `\nYou enter password:  ${ data }!\n\n` );
            treat_password ( data );
        } );

    };

    const enter_name = () => {

        process.stdin.once ( 'data', chunk => {
            write ( `\nHello, ${ chunk.toString ().trim () }!\n\n` );
            enter_password ();
        } );
    };

    enter_name ();

};
QMR_2_d1.help = `ModuleFunc = () => {}`;

QMR_2_d1.mode = { deb: false, log: false, logFs: false , stack: false};

QMR_2_d1.call = () => console.log ( QMR_2_d1 );

module.exports = QMR_2_d1;
