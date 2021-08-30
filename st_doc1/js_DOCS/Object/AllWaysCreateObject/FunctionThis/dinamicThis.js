'use strict';
const options_ = {
    createToString: true,
};

function Rect ( x, y, width, height, options ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    if ( options.createToString ) this.toString = function () {
        return `[${ this.x }, ${ this.y }, ${ this.width }, ${ this.height }]`;
    };
}

const p1 = new Rect ( 10, 20, 50, 50, options_ );
debugger