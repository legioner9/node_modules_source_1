const {Readable, Writable} = require('stream');
const fs = require('fs');
const {ReadStream, WriteStream} = fs;
const path = require('path');

const rfs = fs.createReadStream(path.join(__dirname, 'read_big.txt'));
rfs.on('error', e => {
    if (e.code === 'ENOENT') {
        console.log("File not Found");
    } else {
        console.error(e);
    }
});

rfs.on('data', d => console.log({'d': d.length}));
// rfs.on('readable', () => {
//     const r = rfs.read(50000);
//     if (r) console.log({'r': r.length});
// });
rfs.on('end', () => console.log('The end'));
