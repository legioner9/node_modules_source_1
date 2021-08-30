const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );

const consoleDirDeep = Ex.SetConsole.ConsoleDir.ObjectDeepOptoins;

// debugger
const dev = false;
const ADM_PASS = 'qwe';
let first_menu = [];
let treat_menu = {};

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
    write ( 'Help yourself)))\n' );
};

const f_exit = () => {
    write ( 'Bay (((\n' );
    process.exit ( 0 );
};

const f_run = () => {
    write ( 'do something ... ' );
    setTimeout ( () => {
        write ( 'well done!)))\n' );
        process.exit ( 0 );
    } );
};

const common_clarifications = () => {
    return `[h]elp,
    [e]xit,`;
};
const admin_clarifications = () => {
    first_menu = [ 'h', 'e', 'r' ];
    treat_menu = {
        'h': f_help,
        'e': f_exit,
        'r': f_run,
    };
    return `${ common_clarifications () }
    [r]un
    `;

};

const user_clarifications = () => {
    first_menu = [ 'h', 'e' ];
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
        first_admin_menu ()
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

// process.stdin.once ( 'data', chunk => {
//     write ( `\nHello, ${ chunk.toString ().trim () }!\n\n` );
//     enter_password ();
// } );
