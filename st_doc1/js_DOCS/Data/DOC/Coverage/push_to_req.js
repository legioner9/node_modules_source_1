const { Readable, Writable, Transform, Duplex, pipeline } = require ( 'stream' );
const my_path = require ( 'path' );
const fs = require ( 'fs' );
const Ex = require ( 'st_ex1' );
const serv = Ex.SetServers.SimpleHttp;
const DateEventRout = Ex.SetEvents.DateEventRout;

let ArrLogs = [];

const dateEventRout = new DateEventRout ( my_path.join ( __dirname, 'Log' ), 'logs', ArrLogs );
// const areq = dateEventRout.onToArrReq;
// const ares = dateEventRout.onToArrRes;

dateEventRout.onToArrReq ();
dateEventRout.onToArrRes ();

const handle = ( req, res ) => {
    res.on ( 'close', () => {
        console.log ( dateEventRout.returnArr () );
    } );
    let body = '';

    const head = JSON.stringify ( req.headers );

    req.push ( 'Test Data \n' );
    if ( req ) dateEventRout.emit ( 'toArrReq', [ req, 'Test Data' ] );
    req.push ( 'Test Data2 \n' );
    if ( req ) dateEventRout.emit ( 'toArrReq', [ req, 'Test Data2' ] );
    req.push ( 'Test Data3 \n' );
    if ( req ) dateEventRout.emit ( 'toArrReq', [ req, 'Test Data3' ] );

        // buffer: BufferList
        // head:
        // data: Buffer(11) [84, 101, 115, 116, 32, 68, 97, 116, 97, 32, 10]
        // next:
        // data: Buffer(12) [84, 101, 115, 116, 32, 68, 97, 116, 97, 50, 32, 10]
        // next:
        // data: Buffer(12) [84, 101, 115, 116, 32, 68, 97, 116, 97, 51, 32, 10]
        // next: null

    req.setEncoding ( 'utf8' );
    req.on ( 'data', ( chunc ) => {
        body += chunc;
    } );
    req.on ( 'end', () => {

        res.write ( body ,'utf8',()=>{
            if ( res ) dateEventRout.emit ( 'toArrRes', [ res, 'body' ] );
        });

        res.write ( head ,'utf8' ,()=>{
            if ( res ) dateEventRout.emit ( 'toArrRes', [ res, 'head' ] );
        });

        res.end ();
    } );

};

serv ( handle );


