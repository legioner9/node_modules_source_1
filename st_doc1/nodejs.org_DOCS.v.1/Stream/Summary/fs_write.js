const {Readable, Writable, Transform, pipeline} = require('stream');
const fs = require('fs');
const {ReadStream, WriteStream} = fs;
const path = require('path');

const wfs = fs.createWriteStream(path.join(__dirname, 'Txt_files', 'write.txt'), 'utf-8');
wfs.on('error', e => console.log(e));