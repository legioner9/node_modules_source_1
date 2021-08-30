const wrOn = require ( 'st_ini' ).wrOn;
const { wOn, rOn } = wrOn ();

const my_path = require ( 'path' );
const fs = require ( "fs" );

// console.log ( wOn.help );

const file = fs.createWriteStream ( my_path.join ( __dirname, 'file1.txt' ), 'utf8' );
wOn ( file ,'createWriteStream');

for ( let i = 0 ; i <= 10 ; i++ ) {
    file.write (
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
    );
}

file.end ();

debugger