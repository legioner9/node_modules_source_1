const assert = require('assert'); // assert <- func

assert.doesNotReject(Promise.reject('Wrong value'))
    .then(d => {
        console.log(d);
    }, e => {
        console.log(e.message); // err
    });

(async () => {
    await assert.doesNotReject(
        async () => {
            throw new TypeError('Wrong value');
        },
        SyntaxError
    )
})()
    .then(d => {
        console.log(d);
    }, e => {
        console.log(e.message); //err
    });

assert.doesNotReject(async ()=> {
    throw new Error('wrong data')
}).then(d => {
    console.log(d);
}, e => {
    console.log(e.message); //err
})