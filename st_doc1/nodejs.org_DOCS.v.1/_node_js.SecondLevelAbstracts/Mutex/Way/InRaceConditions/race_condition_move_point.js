'use strict';
const { threadId, workerData, Worker, isMainThread } = require ( 'worker_threads' );

class Point {
    constructor ( data, x, y ) {
        this.data = data;
        if ( typeof x === 'number' ) data[0] = x;
        if ( typeof y === 'number' ) data[1] = y;
    }

    get x () {
        return this.data[0];
    }

    set x ( value ) {
        this.data[0] = value;
    }

    get y () {
        return this.data[1];
    }

    set y ( value ) {
        this.data[1] = value;
    }

    move ( dx, dy ) {
        this.data[0] += dx;
        this.data[1] += dy;
    }
}

if ( isMainThread ) {
    const buffer = new SharedArrayBuffer ( 16 );
    const array = new Int32Array ( buffer, 0, 2 );
    const point = new Point ( array );
    // debugger;
    new Worker ( __filename, { workerData: buffer } );
    new Worker ( __filename, { workerData: buffer } );
}
else {
    const array = new Int32Array ( workerData, 0, 2 );
    const point = new Point ( array );
    if ( threadId === 1 ) {
        for ( let i = 0 ; i < 1000000 ; i++ ) {
            point.move ( 1, 1 );
        }
    }
    else {
        for ( let i = 0 ; i < 1000000 ; i++ ) {
            point.move ( -1, -1 );
        }
    }
    console.log ( point.x, point.y );
}