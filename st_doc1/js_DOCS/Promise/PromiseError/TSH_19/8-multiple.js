'use strict';

const sum = ( a, b ) => new Promise ( ( resolve, reject ) => {
    if ( typeof a === 'number' && typeof b === 'number' ) {
        resolve ( a + b );
        resolve ( a + b );
    }
    else {
        reject ( new Error ( 'a and b should be numbers' ) );
        reject ( new Error ( 'a and b should be numbers' ) );
    }
} );

process.on ( 'warning', warning => {
  console.log ( { warning } );
} );

process.on ( 'unhandledRejection', ( reason, promise ) => {
  console.log ( {
                  unhandledRejection: {
                    reason,
                    promise
                  }
                } );
} );

process.on ( 'rejectionHandled', promise => {
  console.log ( { rejectionHandled: { promise } } );
} );

process.on ( 'multipleResolves', ( type, promise, reason ) => {
  console.log ( {
                  multipleResolves: {
                    type,
                    promise,
                    reason
                  }
                } );
} );


sum ( 7, 'i' )
    .then ( res1 => {
        console.log ( { res1 } );
    } );
