const Stream = require('stream');

const ReadStream = Stream.Readable;
const WritStream = Stream.Writable;

const myReadStream = new ReadStream();
const myWritStream = new WritStream({
    write(chunk, encoding, callback) {
        chunk = chunk.toString().toUpperCase();
    }
});

myWritStream.on('data', d => console.log(d));
myWritStream.write('First Chunk');
debugger;