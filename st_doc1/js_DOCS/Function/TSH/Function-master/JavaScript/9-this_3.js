'use strict';

const Context = function () {
    debugger;
    this.name = 'Marcus';

    this.f1 = function () {
        return this.name;
    };
    this.f2 = () => {
        return this.name;
    };
};

const city = new Context ();
debugger;
console.log ( 'city.f1() = ' + city.f1 () ); //city.f1() = Marcus
console.log ( 'city.f2() = ' + city.f2 () ); //city.f1() = Marcus
debugger;