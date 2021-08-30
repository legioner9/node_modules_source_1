'use strict';

const cities = [ 'Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga' ];
const f = s => s.length;

function f1 () {
    debugger;
    const cities = [ 'Athens', 'Roma' ];
    const f = s => s.toUpperCase ();
    console.dir ( { cities } );
    console.dir ( cities.map ( f ) );

    {
        const f = s => s.toLowerCase ();
        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );
    }

    {
        const cities = [ 'London', 'Beijing', 'Kiev' ];
        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );
    }

}

f1 ();

const f2 = () => {
    debugger;
    const cities = [ 'Athens', 'Roma' ];
    const f = s => s.toUpperCase ();
    console.dir ( { cities } );
    console.dir ( cities.map ( f ) );

    {
        const f = s => s.toLowerCase ();
        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );
    }

    {
        const cities = [ 'London', 'Beijing', 'Kiev' ];
        console.dir ( { cities } );
        console.dir ( cities.map ( f ) );
    }

};
f2()

console.dir ( { cities } );
console.dir ( cities.map ( f ) );
