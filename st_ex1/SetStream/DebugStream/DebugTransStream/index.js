const Trans = require ( 'stream' ).Transform;

class DebugTransStream extends Trans {
    constructor () {
        super ();
    }

}

DebugTransStream.help = `class DebugReadStream extends require ( 'stream' ).Readable`;

DebugTransStream.call = () => console.log ( DebugTransStream );

module.exports = DebugTransStream;