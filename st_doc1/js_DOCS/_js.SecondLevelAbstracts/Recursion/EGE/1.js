function rF ( n ) {
    if ( n > 2 ) return rF ( n - 1 ) - rF ( n - 2 );
    else {
        if ( n === 2 ) {
            return rF ( n - 1 ) ** 2;
        }
        else return 3;
    }
}

debugger;
const u = -1 % 2;
let ar = [];
for ( let i = 1 ; i < 10 ; i++ ) {
    ar.push ( rF ( i ) );
}
debugger;