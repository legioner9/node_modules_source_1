'use strict';

const threads = require ( 'worker_threads' );
const { isMainThread, Worker, threadId, workerData } = threads;
const fs = require ( 'fs' );
const mod_path = require ( 'path' );
const { CountAtomicsSMPH } = require ( './ClassSemaphore_1' );

if ( isMainThread ) {
    const buffer = new SharedArrayBuffer ( 4 );
    const smph_init = new CountAtomicsSMPH ( buffer, 0, 10 );
    const arr_threads = [];
    for ( let i = 0 ; i < 20 ; i++ ) {
        arr_threads[i] = new Worker ( __filename, { workerData: buffer } );
    }
}
else {
    const smph = new CountAtomicsSMPH ( workerData );

    const Repeat_Count = 1000000;
    const name_file = `file-${ threadId }.dat`;
    const context = `Data from ${ threadId }`.repeat ( Repeat_Count );

    console.log ( threadId, { In: smph.count[0] } );

    smph.enter ( () => fs.writeFile ( mod_path.join ( __dirname, name_file ), context, () => {
        fs.unlink ( mod_path.join ( __dirname, name_file ), ( e ) => {
            if ( e ) throw e;
            smph.leave ();
        } );
    } ) );

}
