const CashDecor = function ( func, opt = false ) {
    let cash = new Map ();
    return function ( ...x ) {
        if ( cash.has ( JSON.stringify ( x ) ) ) {
            const cash_data = cash.get ( JSON.stringify ( x ) );
            if ( opt === true ) console.log ( 'From cach ::', cash_data );
            return cash_data;
        }
        // let result = func.call ( this, ...x );
        let result = func ( ...x );
        if ( opt === true ) console.log ( 'From calculate ::', result );
        cash.set ( JSON.stringify ( x ), result );
        return result;
    };
};
CashDecor.help = `ModuleFunc = () => {}`;

CashDecor.call = () => console.log ( CashDecor );

module.exports = CashDecor;