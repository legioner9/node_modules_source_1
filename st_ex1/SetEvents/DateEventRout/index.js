const fs = require ( 'fs' );
const Emitter = require ( 'events' ).EventEmitter;
const my_path = require ( 'path' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

const SM = () => ( new Date () ).getSeconds () + '.' + ( new Date () ).getMilliseconds ();

class DateEventRout extends Emitter {
    constructor ( dir_name, file_name ) {
        super ();
        this.arr = [];
        this.arrToFile_ = [];
        this.dir_name = dir_name;
        this.file_name = file_name;
    }

    onToConsole () {
        this.on ( 'toConsole', ( d ) => {
            let data = d;
            if ( d instanceof Object ) data = JSON.stringify ( d );
            console.log ( data );
        } );
    }

    onToArrReq () {
        this.on ( 'toArrReq', ( reqData ) => {
            let reqBufferSrtingNext = null;
            if ( !( reqData instanceof Array ) && !( reqData[0] instanceof IncomingMessage ) && !( typeof reqData[0] === 'string' ) ) throw Error ( 'reqData is not Arr(req,mark)' );
            if ( reqData[0]._readableState.buffer.head.next ) {
                reqBufferSrtingNext = reqData[0]._readableState.buffer.head.next.data.toString ();
            }
            const data = {
                mark: reqData[1],
                Timer: SM (),
                reqBufferSrting: reqData[0]._readableState.buffer.head.data.toString (),
                reqBufferSrtingNext,
                reqBuffer: reqData[0]._readableState.buffer.head.data,
                req: reqData[0],
            };
            const data_ = {
                mark: reqData[1],
                Timer: SM (),
                reqBufferSrting: reqData[0]._readableState.buffer.head.data.toString (),
                reqBufferSrtingNext,
                reqBuffer: reqData[0]._readableState.buffer.head.data,
            };

            this.arr.push ( data );
            this.arrToFile_.push ( data_ );
        } );
    }

    onToArrRes () {
        this.on ( 'toArrRes', ( resData ) => {
            if ( !( resData instanceof Array ) && !( resData[0] instanceof ServerResponse ) && !( typeof resData[0] === 'string' ) ) throw Error ( 'reqData is not Arr(res,mark)' );
            const data = {
                mark: resData[1],
                Timer: SM (),
                res: resData[0],
            };
            const data_ = {
                mark: resData[1],
                Timer: SM (),
            };

            this.arr.push ( data );
            this.arrToFile_.push ( data_ );

        } );
    }

    arrToFile () {
        debugger;
        fs.mkdir ( this.dir_name, { recursive: true }, ( err ) => {
            if ( err ) throw err;
            debugger;
            s_log_to_file ( this.arrToFile_, my_path.join ( this.dir_name, this.file_name ) );
        }  );

    }

    returnArr () {
        return this.arr;
    }
}

function s_log_to_file ( arr, path ) {

    const rstr = new Readable ();

    let string = JSON.stringify ( arr );
    rstr.push ( string );
    rstr.push ( null );
    // inStream.pipe ( process.stdout );
    debugger;
    const write_fs = fs.createWriteStream ( path, 'utf-8' );
    write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
    pipeline (
        rstr,
        process.stdout,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
    pipeline (
        rstr,
        write_fs,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
}

DateEventRout.help = `'onToArrReq ' : onToArrReq ( mark )
'toArrRes' : onToArrRes ( mark )`;

DateEventRout.call = () => console.log ( DateEventRout );

module.exports = DateEventRout;