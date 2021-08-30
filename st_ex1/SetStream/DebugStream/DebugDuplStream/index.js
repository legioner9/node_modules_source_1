const Dupl = require ( 'stream' ).Duplex;

class DebugDuplStreamds extends Dupl {
    constructor () {
        super ();
    }

}

DebugDuplStreamds.help = `class DebugReadStream extends require ( 'stream' ).Readable`;

DebugDuplStreamds.call = () => console.log ( DebugDuplStreamds );

module.exports = DebugDuplStreamds;