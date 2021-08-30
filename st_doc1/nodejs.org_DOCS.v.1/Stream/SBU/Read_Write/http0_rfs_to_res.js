const wrOn = require ( 'st_ini' ).wrOn;
const http0 = require ( 'st_ini' ).http0;
const { wOn, rOn } = wrOn ();

const my_path = require ( 'path' );
const fs = require ( "fs" );

// console.log ( wOn.help );

const file = fs.createWriteStream ( my_path.join ( __dirname, 'file1.txt' ), 'utf8' );
wOn ( file, 'createWriteStream' );
for ( let i = 0 ; i <= 10 ; i++ ) {
    file.write (
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
    );
}
file.end ();

const handler = ( req, res ) => {
    if ( res ) wOn ( res, 'res' );
    if ( req ) rOn ( req, 'req' );
    // if ( req.socket || res.socket ) {
    //     wOnce ( req.socket, 'socket' );
    //     rOnce ( req.socket, 'socket' );
    // }
    const fsrf = fs.readFile ( my_path.join ( __dirname, 'file1.txt' ), 'utf8', ( err, d ) => {
        if ( err ) throw err;
        res.end ( d );
    } );
};

//Server running at http://127.0.0.1:3004/
// WE finish 39.452 createWriteStream
// WE close 39.466 createWriteStream
// RE readable 47.797 req
// RE end 47.799 req
// RE close 47.812 req
// WE finish 47.814 res
// WE close 47.816 res

http0 ( handler );

debugger