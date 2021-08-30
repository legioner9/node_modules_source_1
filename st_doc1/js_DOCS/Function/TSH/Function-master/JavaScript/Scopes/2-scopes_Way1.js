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

f1 ();
f2 ();
{
    const cities = [ 'Athens', 'Roma' ];
    const f = s => s.toUpperCase ();
    f1 ();
    f2 ();
    const fi = () => {
        debugger;

        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );

    };
    fi ();

}

debugger;
