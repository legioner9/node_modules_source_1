const { Readable, Writable, Transform, Duplex, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const Ex = require ( 'st_ex1' );
const serv = Ex.SetServers.SimpleHttp;

const handle = ( req, res ) => {

    let body = '';

    const head = JSON.stringify ( req.headers );
    req.push ( 'Test Data \n' );
    req.setEncoding ( 'utf8' );
    req.on ( 'data', ( chunc ) => {
        body += chunc;
    } );
    req.on ( 'end', () => {
        res.write ( body );
        res.end ( head );
    } );

};

serv ( handle );


