const wrOn = require ( 'st_ini' ).wrOn;
const wrOnce = require ( 'st_ini' ).wrOnce;
const http0 = require ( 'st_ini' ).http0;
const pipeLine = require ( 'st_ini' ).pipeLine;
const { wOn, rOn } = wrOn ();
const { wOnce, rOnce } = wrOnce ();

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
    if ( res ) wOnce ( res, 'res' );
    if ( req ) rOnce ( req, 'req' );
    if ( req.socket || res.socket ) {
        wOnce ( req.socket, 'seqsocket' );
        rOnce ( req.socket, 'reqsocket' );
        wOnce ( res.socket, 'ressocket' );
        rOnce ( res.socket, 'ressocket' );
    }
    const crsFs = fs.createReadStream ( my_path.join ( __dirname, 'file1.txt' ), 'utf8' );
    if ( crsFs ) console.log ( 'Exist crsFs' );
    rOnce ( crsFs, 'fsCreateReadStream' );
    pipeLine ( crsFs, res, 1 );
    // crsFs.pipe(res)
    debugger;
};

//Server running at http://127.0.0.1:3004/
// WE finish 5.477 createWriteStream
// WE close 5.487 createWriteStream
// Exist crsFs
//
// WEce pipe 10.667 res {pipe: ReadStream}
//   REce readable 10.681 req
//   REce end 10.685 req
//     REce readable 10.691 fsCreateReadStream
//     REce data 10.693 fsCreateReadStream {data: "Lorem ipsum dolor sit amet, consectetur adipisicin…qui officia deserunt mollit anim id est laborum.↵"}
//     REce end 10.701 fsCreateReadStream
//   REce close 10.706 req
// WEce finish 10.708 res
//
// Pipeline succeeded.
// WEce unpipe 10.711 res {unpipe: ReadStream}
// WEce close 10.714 res
//     REce close 10.715 fsCreateReadStream
//       REce readable 11.272 reqsocket
//       REce readable 11.273 ressocket
// Exist crsFs
// WEce pipe 11.278 res {pipe: ReadStream}
//       REce data 11.280 reqsocket {data: Buffer(553)}
//   REce readable 11.282 req
//   REce end 11.283 req
//     REce readable 11.287 fsCreateReadStream
//     REce data 11.289 fsCreateReadStream {data: "Lorem ipsum dolor sit amet, consectetur adipisicin…qui officia deserunt mollit anim id est laborum.↵"}
//     REce end 11.294 fsCreateReadStream
//   REce close 11.295 req
// WEce finish 11.296 res
// Pipeline succeeded.
// WEce unpipe 11.297 res {unpipe: ReadStream}
// WEce close 11.298 res
//     REce close 11.318 fsCreateReadStream
//       REce readable 13.980 reqsocket
//       REce readable 13.981 ressocket
//       WEce finish 13.982 seqsocket
//       WEce finish 13.982 ressocket

http0 ( handler );

