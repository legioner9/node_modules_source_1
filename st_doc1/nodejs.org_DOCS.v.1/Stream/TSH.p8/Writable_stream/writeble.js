const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const rstr = fs.createReadStream(path.join(__dirname, 'read.txt'), 'utf-8');
const wstr = fs.createWriteStream(path.join(__dirname, 'write.txt'));

rstr.on('data', d => {
    console.log({dl: d.length});
    // wstr.write(d, e => {
    //     if (e) throw e;
    // })
});

rstr.on('error', e => {
    if (e) throw e;
});

rstr.on('end', () => console.log('End of read'));

const gz = zlib.createGzip();
rstr.pipe(gz).pipe(wstr);