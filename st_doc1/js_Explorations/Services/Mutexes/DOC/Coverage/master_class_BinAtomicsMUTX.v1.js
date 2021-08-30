'use strict';
const { threadId, workerData, Worker, isMainThread } = require ( 'worker_threads' );

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
    const shared_buffer = new SharedArrayBuffer ( 32 );

    const mutx_1 = new BinAtomicsMUTX ( shared_buffer, 0, true );
    const mutx_2 = new BinAtomicsMUTX ( shared_buffer, 4, true );
    new Worker ( __filename, { workerData: shared_buffer } );
    new Worker ( __filename, { workerData: shared_buffer } );
}
else {
    const mutx_1 = new BinAtomicsMUTX ( workerData );
    const mutx_2 = new BinAtomicsMUTX ( workerData, 4 );
    console.log ( {
                      mutx_1,
                      mutx_2,
                      workerData,
                      isMainThread,
                      threadId,
                  } );
    const value = threadId % 2 ? -1 : 1;
    const arr = new Int32Array ( workerData, 8 );
    setInterval ( () => {
        mutx_1.enter ();
        for ( let i = 0 ; i < arr.length ; i++ ) {
            arr[i] += value;
        }
        console.log ( value, arr );
        // out comment for 'Tried live not own process'
        // mutx_2.leave ();
        mutx_1.leave ();
    }, 100 );
}