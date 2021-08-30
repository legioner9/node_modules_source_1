const rf = ( fn ) => ( ...args ) => {
    debugger;
    fn ( ...args );
};

const second = ( ...args ) => {
    debugger;
    console.log ( ...args );
};
debugger;
rf ( second ) ( 1, 2, 3 );