const PassThro = require ( 'stream' ).PassThrough;

class DebugPassThroStream extends PassThro {
    constructor () {
        super ();
    }

}

DebugPassThroStream.help = `class DebugReadStream extends require ( 'stream' ).Readable`;

DebugPassThroStream.call = () => console.log ( DebugPassThroStream );

module.exports = DebugPassThroStream;