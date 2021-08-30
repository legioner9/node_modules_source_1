'use strict';

const http = require ( 'http' );
const fs = require ( 'fs' );
const path = require ( 'path' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

const wfs = fs.createWriteStream ( path.join ( __dirname, 'res_body.txt' ), 'utf-8' );

http.get ( {
               hostname: 'localhost',
               port: 3005,
               path: '/api/meth2',
               // agent: false  // create a new agent just for this
               // one request
           }, ( res ) => {
    // Do stuff with response
    console.log ( res );
    res.on ( 'data', d => {
        console.log ( { d: d.toString () } );//{d: "{"name":"Pavel","age":300}"}
        // wfs.write(d.toString());
    } );
    pipeline ( res, wfs, e => {
        if ( e ) new Error ( `Pipe is err :: ${e}` );
    } );

} );