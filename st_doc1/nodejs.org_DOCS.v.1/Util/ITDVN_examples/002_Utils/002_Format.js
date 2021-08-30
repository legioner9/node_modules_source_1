var utils = require ( 'util' );
const fs = require ( 'fs' );

// %s - Строка
// %d - Число (целое или число с плавающей запятой) 
// %j - JSON
// %% - символ '%'
var user = {
    name: "Ivan",
    age: 25,
    salary: 10000,
    bonus: 15
};

const str = utils.format ( 'Hello, my name is %s. I\'m %d years old! My bonuses from the salary are %d%% user %o', user.name, user.age, user.bonus, user );
const parse_str = analyse_sir`name ${ user.name } age ${ user.age }`;

function analyse_sir ( strings, ...variables ) {
    return {
        strings,
        variables,
    };
}

const ut = utils.format ( '%s:%s', 'foo' );
const ut_2 = utils.formatWithOptions ( { colors: true }, 'See object %O', { foo: 42 } );
console.log ( ut_2 ); //'See object { foo: 42 }', where `42` is colored as a number

fs.access ( 'file/that/does/not/exist', ( err ) => {
    debugger;
    const name = utils.getSystemErrorName ( err.errno );
    console.error ( name );  // convert err.errno from err.code   ENOENT
} );