'use strict';

const threads = require ( 'worker_threads' );
const { isMainThread, Worker, threadId, workerData } = threads;
const { BinarySMPH } = require ( './ClassSemaphore_1' );

if ( isMainThread ) {
    const buffer = new SharedArrayBuffer ( 11 );
    const smph_init = new BinarySMPH ( buffer, 0, true );
    const arr_threads = [];
    for ( let i = 0 ; i < 2 ; i++ ) {
        arr_threads[i] = new Worker ( __filename, { workerData: buffer } );
    }

}
else {
    const array = new Int8Array ( workerData, 1 );
    const value = threadId % 2 === 0 ? 1 : -1;
    const smph = new BinarySMPH ( workerData );
    setInterval ( () => {
        smph.enter ();
        for ( let i = 0 ; i < 10 ; i++ ) {
            array[i] += value;
        }
        console.log ( value, array );
        smph.leave ();
    }, 100 );

}
