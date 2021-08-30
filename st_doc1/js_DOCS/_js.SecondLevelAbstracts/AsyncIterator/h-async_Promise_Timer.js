'use strict';

const range = {
    start: 1,
    end: 10,
    [Symbol.asyncIterator] () {
        let value = this.start;
        // where TIMERS ?
        return {
            next: () => new Promise ( ( resolve, reject ) =>
                                          setTimeout ( () =>
                                                           resolve ( {
                                                                         value,
                                                                         done: value++ === this.end + 1,
                                                                     } ), 0 ) )
        };

    }
};

console.dir ( {
                  range,
                  names: Object.getOwnPropertyNames ( range ),
                  symbols: Object.getOwnPropertySymbols ( range ),
              } );

let k = 0;

const timer = setInterval ( () => {
    console.log ( 'next ', k++ );
}, 10 );

// const t2 = setTimeout ( () => {
//     console.log ( 1 );
//     clearInterval ( timer );
// }, 50 )

( async () => {
        for await ( const number of range ) {
            console.log ( number );
        }
        clearInterval ( timer );
    }
) ();
