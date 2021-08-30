function cashDecor ( func ) {
    let cash = new Map ();
    return function ( ...x ) {
        if ( cash.has ( JSON.stringify ( x ) ) ) {
            debugger
            return cash.get ( JSON.stringify ( x ) );
        }
        // let result = func.call ( this, ...x );
        let result = func ( ...x );
        debugger
        cash.set ( JSON.stringify ( x ), result );
        return result;
    };
}

const ob = {
    meth () {return 2;},
    runing ( x ) {
        debugger;
        return ob.meth () * x;
    }
};
debugger

ob.runing = cashDecor ( ob.runing );
const ir = ob.runing ( 4 );

