'use strict';

const Context = function () {
    debugger
    this.name = 'Marcus';
    const city = {
        name: 'Kiev',
        year: 482,
        f1: function () {
            debugger
            return this.name;
        },
        f2: () => {
            debugger
            return this.name;
        },
        f3 () {
            debugger
            return this.name;
        }
    };
    debugger;
    return city;
};

const city = new Context ();

console.log ( 'city.f1() = ' + city.f1 () ); //city.f1() = Kiev
console.log ( 'city.f2() = ' + city.f2 () ); //city.f2() = Marcus
console.log ( 'city.f3() = ' + city.f3 () ); //city.f1() = Kiev
debugger;