const {Readable, Writable} = require('stream');
const fs = require('fs');
const {ReadStream, WriteStream} = fs;
const path = require('path');

debugger;
const n_rs = new Readable();
const n_ws = new Writable({
    write(chunk, encoding, callback) {
        callback()
    }
});

const n_rfs = new ReadStream(path.join(__dirname, 'read.txt'));
const n_wfs = new WriteStream(path.join(__dirname, 'write.txt'));

const rfs = fs.createReadStream(path.join(__dirname, 'read_big.txt'));
rfs.on('error', e => console.log(e));

const wfs = fs.createWriteStream(path.join(__dirname, 'write.txt'), 'utf-8');

rfs.on('data', d => {
    console.log(d.length);
    wfs.write(d.toString().toUpperCase());// it's
    // transformation
});

debugger;
