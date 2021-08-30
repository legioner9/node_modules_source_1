'use strict';

const maybe = x => {
    const map = fn => maybe ( x ? fn ( x ) : null );
    const ap = functor => functor.map ( f => x && f ? f ( x ) : null );
    const chain = f => f ( x );
    return Object.assign ( map, { map, ap, chain } );
};

// Usage

const twice = x => x * 2;
const inc = x => ++x;
debugger;
const w1 = maybe ( 5 ) ( twice ) ( inc ) ( console.log );
const w2 = maybe ( 5 ).map ( twice ).map ( inc ).map ( console.log );
const w3 = maybe ( 5 ) ( twice ).ap ( maybe ( inc ) ) ( console.log );
const w4 = maybe ( 5 ) ( twice ).ap ( maybe () ) ( console.log );
const w5 = maybe ( 5 ).chain ( x => maybe ( x * 2 ) ) ( inc ) ( console.log );
const w6 = maybe ( 5 ).chain ( x => maybe ( x * 2 ) ).map ( inc ) ( console.log );
