function makeArmy () {
    const shooters = [];

    for ( let i = 0 ; i < 10 ; i++ ) {
        // shooters[i] = function () { console.log ( { i } );};
       shooters[i] = () => console.log ( { i } );

    }
    return shooters;
}

const arr = makeArmy ();
debugger;
arr[4] ();