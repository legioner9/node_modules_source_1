'use strict';

const http = require ( 'http' );

const user = { name: 'Pavel', age: 24 };
const port = 3005;
const host = '127.0.0.1';

const routing = {
        '/': `<h1>Welcome to homepage</h1><hr>`,
        '/user': user,
        '/api/meth1': ( req, res ) => {
            console.log ( `"${ req.url }" => status :: ${ res.statusCode } ` );
            return { status: res.statusCode };
        },
        '/api/meth2': ( req, res ) => ( {
            user,
            url: req.url,
            cookie: req.headers.cookie,
        } ),

    }
;

const types = {
    object: JSON.stringify,
    string: s => s,
    undefined: () => 'not found',
    function: ( fn, req, res ) => JSON.stringify ( fn ( req, res ) ),
};

const server = http.createServer ( ( req, res ) => {
    const body_res = router ( { req, res } );
    const headerNames = req.headers.cookie;
    res.setHeader ( 'Set-Cookie', [ 'type=ninja', 'language=javascript' ] );
    const jstr = headerNames.split( ';' );
    for ( let i = 0 ; i < jstr.length ; i++ ) {

    }
    debugger;
    res.end ( `${ body_res } cookies :: ${ jstr }` );
} ).listen ( port, host, () => {
    console.log ( `Server start at http://${ host }:${ port }` );
} );

function router ( client ) {
    const data = routing[client.req.url];
    const type = typeof data;
    const serializer = types[type];
    return serializer ( data, client.req, client.res );
}

server.on ( 'clientError', ( err, socket ) => {
    socket.end ( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
} );

server.on ( 'error', err => {
    if ( err.code === 'EACCES' ) {
        console.log ( `No access to port: ${ port }` );
    }
    if ( err ) throw err;
} );

setInterval ( () => user.age++, 2000 );