'use strict';

const cities = [ 'Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga' ];
const f = s => s.length;

function f1 () {
    debugger;
    console.dir ( { cities } );
    console.dir ( cities.map ( f ) );

}

const f2 = () => {
    debugger;

    console.dir ( { cities } );
    console.dir ( cities.map ( f ) );

};
{
    const cities = [ 'Athens', 'Roma' ];
    const f = s => s.toUpperCase ();
    setTimeout ( f1, 100 );
    setTimeout ( f2, 100 );
    setTimeout ( () => {
        debugger;

        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );

    }, 100 );
    setTimeout ( function() {
        debugger;

        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );

    }, 100 );
}
debugger;
