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
        const rs_c = { close: args };// ??
        console.log ( 'Is res drain' );
        debugger;
    } );

    res.on ( 'finish', ( args ) => {
        const rs_c = { close: args };// args undefined
        console.log ( 'Is res finish' );
        debugger;
    } );

    res.on ( 'pipe', ( args ) => {
        const rs_c = { close: args };// args undefined
        console.log ( 'Is res pipe' );
        debugger;
    } );

    const head = JSON.stringify ( req.headers );
    req.push ( 'Test Data \n' );
    req.setEncoding ( 'utf8' );
    req.on ( 'data', ( chunc ) => {
        body += chunc;
    } );
    req.on ( 'end', () => {
        res.write ( body );
        debugger;
        res.end ( head ); // emit => 'finish' => 'close' events
    } );

};

serv ( handle );