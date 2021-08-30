const {Readable, Writable} = require('stream');
const fs = require('fs');
const path = require('path');

const rfs = fs.createReadStream(path.join(__dirname, 'read.txt'));
rfs.on('error', e => console.log(e));

// define in extends class _write method
class MyWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        console.log({'chunk': chunk.toString()}, 'from mws');
        callback(); // callback as bound method of
        // .write !!!
    }

    _final(callback) {
        console.log('Final mws');
    }

    _destroy(error, callback) {
        console.log(error.message);
    }
}

const mws = new MyWritable();

// define in new class
const mws_2 = new Writable({
    write(chunk, encoding, callback) {
        console.log({'chunk': chunk.toString().toUpperCase()}, 'from mws_2');
        callback();
    }
});

// 3 ===============================================
const mws_3 = new Writable();
mws_3.on('error', e => console.log(e));

//define _write able mws_3.write
mws_3._write = function (chunk, encoding, callback) {
    console.log({'chunk': chunk.toString().toLowerCase()}, 'from mws_3');
    callback();
};

// two ways wright to


mws_3.write('Text From Write()');
rfs.pipe(mws_3);

mws_2.write('Text From Write()');
rfs.pipe(mws_2);

mws.write('Text From Write()');
rfs.pipe(mws);


