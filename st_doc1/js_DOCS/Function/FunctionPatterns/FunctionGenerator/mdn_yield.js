function * fibonacci () { // a generator function
    let [ prev, curr ] = [ 0, 1 ];
    while ( true ) {
        [ prev, curr ] = [ curr, prev + curr ];
        yield curr;
    }
}

debugger;
for ( const n of fibonacci () ) {
    console.log ( n );
    // truncate the sequence at 1000
    if ( n >= 10 ) {
        break;
    }
}

function* generator(i) {
    yield i;
    yield i + 10;
}

let gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20

gen = generator(10);

for (const item of gen ){
    debugger
}