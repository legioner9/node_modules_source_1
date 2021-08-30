const assert = require('assert'); // assert <- func

let err;

function e_f_0() {
    err = new Error('e_f_0() init error');
}

function e_f_1() {
    e_f_0();
}

function assert_trasser()  {
    try {
        assert.ifError(err)
    } catch (e) {
        console.log(e);
    }
}

debugger;
e_f_1();
assert_trasser();
//     at assert_trasser (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\assert.ifError.js:14:12)
//     at Object.<anonymous> (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\assert.ifError.js:19:1)
//     at e_f_0 (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\assert.ifError.js:6:11)
//     at e_f_1 (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\assert.ifError.js:10:5)
//     at Object.<anonymous> (D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Assert\assert.ifError.js:18:1)