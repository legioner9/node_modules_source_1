const { Readable, Writable, Transform, Duplex, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const Ex = require ( 'st_ex1' );
const serv = Ex.SetServers.SimpleHttp;

const wr_str = new Writable ();

const handle = ( req, res ) => {

    if ( res.writable === true ) console.log ( 'writable' ); // true
    console.log ( { writableHighWaterMark: res.writableHighWaterMark } ); // writableHighWaterMark: 16384

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
        console.log ( { chunc } );
    } );
    req.on ( 'end', () => {
        res.cork ();/// ???
        res.write ( body );
        res.uncork ( body );/// ???
        if ( res.writableEnded === false ) console.log ( ' false writableEnded' ); // true
        res.end ( head ); // emit => 'finish' => 'close' events
        if ( res.writableEnded === true ) console.log ( ' true writableEnded' ); // true

    } );

};

serv ( handle );