'use strict';

const Context = function () {
    debugger;
    this.name = 'Marcus';
    this.city = {
        name: 'Kiev',
        year: 482,
        f1: function () {
            return this.name;
        },
        f2: () => {
            return this.name;
        },
        f3 () {
            return this.name;
        }
    };
};

const city = new Context ();
debugger;
console.log ( 'city.f1() = ' + city.city.f1 () ); //city.f1() = Kiev
console.log ( 'city.f2() = ' + city.city.f2 () ); //city.f2() = Marcus
console.log ( 'city.f3() = ' + city.city.f3 () ); //city.f1() = Kiev
debugger;