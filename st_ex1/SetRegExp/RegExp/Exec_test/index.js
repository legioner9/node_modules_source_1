/**
 * @name TestInput
 * @param re
 * @param str
 * @param callback err({ re, str }),d({ re, str })
 * @constructor
 */

const TestInput = function ( re = new RegExp ( /''/ ), str = '', callback = new Function () ) {
    if ( re.test ( str ) ) {
        return callback ( null, { re, str } );
    }
    else {
        return callback ( { re, str } );
    }
};
TestInput.help = `TestInput = function  ( re, str ,callback) {
    if ( re.test ( str ) ) {
        callback ( null, { re, str } );
    }
    else {
        callback ( { re, str } )
    }
}`;

TestInput.call = () => console.log ( ModuleFunc );

module.exports = TestInput;
