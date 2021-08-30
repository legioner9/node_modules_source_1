const print = header => {
    const begin = print.headers[header] || 'WTF? ';
    return ( body ) => {
        const data = new Date().toISOString()
        console.log ( begin, data, body );
    };
};

print.headers = {
    fast: 'faser))) ',
    slow: 'slowing((( '
};
debugger

const fast = print ( 'fast' );
const slow = print ( 'slow' );

fast ( ' Krasava ' );
slow ( ' Loshara ' );
