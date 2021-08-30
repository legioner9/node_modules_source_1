const assert = require ( 'assert' );
const tryCatch = require ( '../../SetTry/TryCatch' );

function DeepEqual ( a, b ) {
    tryCatch ( assert.deepStrictEqual ) ( '#to_consJson', null, a, b );
}

DeepEqual.help = `DeepEqual(a,b) === tryCatch ( assert.strictEqual ) ( '#to_consJson', null, a, b )`;

DeepEqual.call = () => console.log ( DeepEqual );

module.exports = DeepEqual;