const {Readable, Writable, Transform, pipeline} = require('stream');
const fs = require('fs');
const {ReadStream, WriteStream} = fs;
const path = require('path');

class MyWritable extends Writable {
    constructor(options = {}) {
        super(options);
    }

    _write(chunk, encoding, callback) { // _write priorities
        //  above _transform
        console.log('_write');
        debugger;
        this.push(chunk.toString().toLowerCase());
        callback();
    }

    _final(callback) {
        callback();
    }
}

const mwfs = new MyFsWrite(path.join(__dirname, 'Txt_files', 'write.txt'));
mwfs.on('error', e => console.log(e));

const rfs = fs.createReadStream(path.join(__dirname, 'Txt_files', 'read.txt'));
rfs.on('error', e => {
    if (e.code === 'ENOENT') {
        console.log("File not Found");
    } else {
        console.error(e);
    }
});


pipeline(
    rfs,
    mwfs,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);