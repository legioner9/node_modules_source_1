[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

const f1 = x => x * 2;
const f2 = x => ++x;

const compose = ( ...funcs ) => x => funcs.reduce ( ( v, f ) => f ( v ), x );
const f3 = compose ( f1, f2 );
debugger;
const gf = f3 ( 5 );