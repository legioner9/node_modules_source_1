const { Readable, Writable, Transform, Duplex, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const Ex = require ( 'st_ex1' );
const serv = Ex.SetServers.SimpleHttp;

const wr_str = new Writable ();

const handle = ( req, res ) => {

    let body = '';
    res.on ( 'close', ( args ) => {
        const rs_c = { close: args };// args undefined
        console.log ( 'Is res close' );
        debugger;
    } );

    res.on ( 'drain', ( args ) => {
        const rs_c = { drain: args };// ??
        console.log ( 'Is res drain' );
        debugger;
    } );

    res.on ( 'finish', ( args ) => {
        const rs_c = { finish: args };// args undefined
        console.log ( 'Is res finish' );
        debugger;
    } );

    res.on ( 'pipe', ( args ) => {
        const rs_c = { pipe: args };// args = pipe: IncomingMessage
        console.log ( 'Is res pipe' );
        debugger;
    } );

    res.on ( 'unpipe', ( args ) => {
        const rs_c = { unpipe: args };// args = unpipe: IncomingMessage
        console.log ( 'Is res unpipe' );
        debugger;
    } );

    const head = JSON.stringify ( req.headers );
    req.push ( 'Test Data \n' );
    req.setEncoding ( 'utf8' );
    req.on ( 'data', ( chunc ) => {
        console.log ( { chunc } );
        body += chunc;
    } );
    req.push ( head );
    req.pipe ( res );  // 'pipe' => 'unpipe' that's All!!!
    req.unpipe ( res );


};

serv ( handle );