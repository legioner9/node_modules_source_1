const {Readable, Writable} = require('stream');
const fs = require('fs');
const path = require('path');

const mrs = new Readable({
    read(size) {
        console.log(size);
    }
})

mrs.on('data', (e, d) => {
    if (e) throw e;
    console.log({d});
});

debugger;



