'use strict'

const Arg_ext = (Catigory) => class extends Catigory {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
}

module.exports = Arg_ext;
