const util = require('util');
const fs = require('fs');

const pf = new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve('YES');
    }, 100);
    setTimeout(() => {
        reject('NO');
    }, 200);
}));

// pf.then(resolve => console.log('resolve::', resolve),
//     reject => console.log('reject::', reject));

function ret_pf() {
    return pf;
}

const cb_pf = util.callbackify(ret_pf);

cb_pf((e, d) => {
    if (e) throw e;
    console.log('d::', d);
});

util.format('%o', fs);