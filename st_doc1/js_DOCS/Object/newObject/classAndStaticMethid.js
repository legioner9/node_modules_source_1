'use strict';

class Point {
    constructor ( x, y ) {
        this.x = x;
        this.y = y;
    }

    static z = 10;

    move ( x, y ) {
        this.x += x;
        this.y += y;
    }

    toString () {
        return `[${ this.x }, ${ this.y }]`;
    }

    static from ( obj ) {
        const { x, y } = obj;
        return new Point ( x, y );
    }
}

const point = new Point ( 3, 5 );
debugger