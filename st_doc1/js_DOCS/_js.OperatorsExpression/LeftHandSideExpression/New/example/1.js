'use strict'
'use ndb'

const Context = function () { // function as
    this.name = 'Marcus';
    const city = {
        name: 'Kiev',
        year: 482,
        f1: function () {
            return this.name; // locking name: 'Kiev'
        },
        f2: () => {
            return this.name; // locking this.name = 'Marcus'
        },
        f3 () {
            return this.name; // locking name: 'Kiev'
        }
    };
    return city;
};

const city = new Context ();

const q1 = ( 'city.f1() = ' + city.f1 () );
const q2 = ( 'city.f2() = ' + city.f2 () );
const q3 = ( 'city.f3() = ' + city.f3 () );