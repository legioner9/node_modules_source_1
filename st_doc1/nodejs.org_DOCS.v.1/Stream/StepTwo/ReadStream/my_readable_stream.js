const { Readable } = require('stream');

const inStream = new Readable({
                                  read() {}
                              });

inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ \n');

inStream.push(null); // No more data

inStream.pipe(process.stdout);