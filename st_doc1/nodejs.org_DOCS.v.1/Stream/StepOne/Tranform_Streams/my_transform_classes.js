'use strict';
const Transform = require('stream').Transform;


class ToUpperCaseTransformStream extends Transform {
    constructor(options = {}) {
        options = Object.assign({}, options, {
            decodeStrings: false,
        })
        super(options);
    }

    _transform(chunk, encoding, callback) {
        if (encoding !== 'utf8') {
            this.emit('error', new Error('Encoding not' +
                ' utf-8'));
            return callback();
        }
        this.push(chunk.toUpperCase());
        callback();
    }

    _flush(callback) {
        this.push('===end===');
        callback();
    }
}
module.exports = {
    ToUpperCaseTransformStream,
}