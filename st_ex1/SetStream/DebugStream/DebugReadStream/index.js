const Read = require ( 'stream' ).Readable;

class DebugReadStream extends Read {
    constructor () {
        super ();
    }

    _destroy ( err, callback ) {
        console.log ( { errMess: err.message } );
        callback ();
    }

    _read ( size ) {
        console.log ( { size } );
    }

}

DebugReadStream.help = `class DebugReadStream extends require ( 'stream' ).Readable`;

DebugReadStream.call = () => console.log ( DebugReadStream );

module.exports = DebugReadStream;