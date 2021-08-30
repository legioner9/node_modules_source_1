
class DebugWritStream  extends require('stream').Writable {
    constructor (){
        super()
    }

}

DebugWritStream.help = `DeepEqual(a,b) === tryCatch ( assert.strictEqual ) ( '#to_consJson', null, a, b )`;

DebugWritStream.call = () => console.log ( DebugWritStream );

module.exports = DebugWritStream;