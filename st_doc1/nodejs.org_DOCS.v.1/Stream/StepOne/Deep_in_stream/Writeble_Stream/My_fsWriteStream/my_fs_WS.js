const {Readable, Writable} = require('stream');
const {pipeline} = require('stream');
const fs = require('fs');
const path = require('path');

const rfs = fs.createReadStream(path.join(__dirname, 'read.txt'));
rfs.on('error', e => console.log(e));

const wfs = fs.createWriteStream(path.join(__dirname, 'write.txt'), 'utf-8');

// wfs._write = function (chunk, encoding, callback) {
//     console.log({'chunk': chunk.toString().toUpperCase()}, 'from wfs');
//     callback();
// };

const ss = rfs.pipe(wfs); // ss WriteStream
rfs.pipe(wfs);
pipeline(
    rfs,
    wfs,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
)

