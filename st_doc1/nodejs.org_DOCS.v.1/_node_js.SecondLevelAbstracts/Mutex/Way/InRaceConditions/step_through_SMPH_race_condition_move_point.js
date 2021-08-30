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

const LOCK = 0;
const UNLOCK = 1;

class BinAtomicsMUTX {
    constructor ( buffer, offset = 0, init = false ) {
        this.lock = new Int32Array ( buffer, offset, 1 );
        if ( init ) Atomics.store ( this.lock, 0, UNLOCK );
        this.own = false;
    }

    enter () {
        // Atomics.wait ( this.lock, 0, LOCK );
        // Atomics.store ( this.lock, 0, LOCK );
        let prev = Atomics.exchange ( this.lock, 0, LOCK );
        while ( prev === LOCK ) {
            Atomics.wait ( this.lock, 0, LOCK );
            prev = Atomics.exchange ( this.lock, 0, LOCK );
        }
        this.own = true;
    }

    leave () {
        if ( !this.own ) {
            console.log ( 'Tried live not own process' );
            return;
        }
        if ( Atomics.load ( this.lock, 0 ) === UNLOCK ) {
            throw new Error ( 'Tried live UNLOCK BinMUTX' );
        }
        Atomics.store ( this.lock, 0, UNLOCK );
        Atomics.notify ( this.lock, 0, 1 );
        this.own = false;
    }
}

if ( isMainThread ) {
    const buffer = new SharedArrayBuffer ( 16 );
    const array = new Int32Array ( buffer, 8, 2 );
    const point_init = new Point ( array );
    const mutx_init = new BinAtomicsMUTX ( buffer, 0, true );
    const mutx_init_2 = new BinAtomicsMUTX ( buffer, 4, true );

    new Worker ( __filename, { workerData: buffer } );
    new Worker ( __filename, { workerData: buffer } );
}
else {
    const mutx = new BinAtomicsMUTX ( workerData );
    const mutx_2 = new BinAtomicsMUTX ( workerData ,4);
    const array = new Int32Array ( workerData, 8, 2 );
    const point = new Point ( array );

    function step () {
        if ( threadId === 1 ) {
            mutx.enter ();
            for ( let i = 0 ; i < 1000000 ; i++ ) {
                point.move ( 1, 1 );
            }
            for ( let i = 0 ; i < 1000000 ; i++ ) {
                point.move ( -1, -1 );
            }
            mutx.leave ();
        }
        else {
            mutx.enter ();
            for ( let i = 0 ; i < 1000000 ; i++ ) {
                point.move ( 1, 1 );
            }
            for ( let i = 0 ; i < 1000000 ; i++ ) {
                point.move ( -1, -1 );
            }
            mutx.leave ();
        }
        mutx_2.enter ();
        console.log ( threadId, point.x, point.y );
        mutx_2.leave ();

    }

    setInterval ( step, 100 );
}