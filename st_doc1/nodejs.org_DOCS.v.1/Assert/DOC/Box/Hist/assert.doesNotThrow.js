const assert = require('assert'); // assert <- func

try {
    assert.doesNotThrow(() => {
            throw new Error('Wrong data')
        },
        /Wrong data/,
        'OOps ((')
} catch (e) {
    console.log(e)
}


