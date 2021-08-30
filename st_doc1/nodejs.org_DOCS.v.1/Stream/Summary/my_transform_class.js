const {Readable, Writable, Transform, pipeline} = require('stream');
const fs = require('fs');
const {ReadStream, WriteStream} = fs;
const path = require('path');

class MyTransform extends Transform {
    constructor(options = {}) {
        options = Object.assign({}, options, {
            decodeStrings: false
        });
        super(options);
    }

    _transform(chunk, encoding, callback) {
        // if (encoding !== 'utf-8') {
        //     this.emit('error', new Error('Only Utf-8' +
        //         ' sources!!!'));
        //     return callback();
        // }
        this.push(chunk.toString().toUpperCase());
        console.log('_transform');
        callback();
    }

    _read(size) {
        console.log('_read');
    }

    _write(chunk, encoding, callback) { // _write priorities
        //  above _transform
        console.log('_write');
        debugger;
        this.push(chunk.toString().toLowerCase());
        callback();
    }

    _flush(callback) {
        this.push('=====end=====');
        callback();
    }
}

const mtf = new MyTransform();

const rfs = fs.createReadStream(path.join(__dirname, 'Txt_files', 'read.txt'));
rfs.on('error', e => {
    if (e.code === 'ENOENT') {
        console.log("File not Found");
    } else {
        console.error(e);
    }
});

const wfs = fs.createWriteStream(path.join(__dirname, 'Txt_files', 'write.txt'), 'utf-8');
wfs.on('error', e => console.log(e));

pipeline(
    rfs,
    mtf,
    wfs,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);