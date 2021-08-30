'use strict';

const { log } = Math;
const Log = ( base, n ) => log ( n ) / log ( base );

/// cesure
const createLog = base => n => Log ( base, n );

/// lambda
{
    const lg = n => Log ( 10, n );
    const ln = n => Log ( Math.E, n );
}

/// bind
{
    const lg = Log.bind ( null, 10 );
    const ln = Log.bind ( null, Math.E );
}

///partial
{
    const partial = ( fn, ...args ) => ( ...rest ) => fn ( ...args, ...rest );

    const sum4 = ( a, b, c, d ) => ( a + b + c + d );

    const f11 = partial ( sum4, 1 );
    const f12 = partial ( f11, 2 );
    const f13 = partial ( f12, 3 );
    const y1 = f13 ( 4 );
    console.log ( y1 ); //

    const f21 = partial ( sum4, 1, 2 );
    const f22 = partial ( f21, 3 );
    const y2 = f22 ( 4 );
    console.log ( y2 );
}

/// curry
{
    const curry = fn => (...args) => {
        if (fn.length > args.length) {
            const f = fn.bind(null, ...args);
            return curry(f);
        } else {
            return fn(...args);
        }
    };

// Usage

    const sum4 = (a, b, c, d) => (a + b + c + d);

    const f = curry(sum4);
    const y1 = sum4(1, 2, 3, 4);
    const y2 = f(1, 2, 3, 4);
    const y3 = f(1, 2, 3)(4);
    const y4 = f(1, 2)(3)(4);
    const y5 = f(1)(2)(3)(4);
    const y6 = f(1)(2, 3, 4);
    const y7 = f(1)(2)(3, 4);
    const y8 = f(1, 2)(3, 4);
    console.log(y1, y2, y3, y4, y5, y6, y7, y8);
}