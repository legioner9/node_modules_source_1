const fs = require('fs');
const path = require('path');

const rstr = fs.createReadStream(path.join(__dirname, 'read.txt'), 'utf-8');

rstr.on('readable', () => {
    const rstr_ = rstr;
    // console.log('On Readable Start');
    const data = rstr.read();
    if (data) {
        console.log({dl: data.length});
    }
});

rstr.on('error', e => {
    console.dir({e});
    debugger;
});
let count = 0;
rstr.on('data', d => {
    console.log(++count, d.length);
});
