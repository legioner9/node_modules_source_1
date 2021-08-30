function cashDecor ( func ) {
    let cash = new Map ();
    return function ( ...x ) {
        if ( cash.has ( JSON.stringify ( x ) ) ) {
            debugger
            return cash.get ( JSON.stringify ( x ));
        }
        let result = func ( ...x );
        cash.set ( JSON.stringify ( x ), result );
        debugger
        return result;
    };
}

const mP = Math.pow;
const mp = cashDecor ( mP );
mp ( 2, 2 );
mp ( 2, 2 );