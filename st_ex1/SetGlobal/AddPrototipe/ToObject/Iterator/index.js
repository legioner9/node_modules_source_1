
const fn_key_ = function ( item ) {
    return item[0];
};

const fn_value_ = function ( item ) {
    return item[1];
};

function ManeObjIterator ( fn_key = fn_key_, fn_value = fn_value_, opt = false ) {
    if ( opt === true ) debugger;
    return Object.prototype[Symbol.iterator] = function () {
        const iterator = Object.entries ( this );
        let count = 0;
        if ( opt === true ) debugger;
        return {
            next: () => {
                if ( opt === true ) debugger;
                const item_ = iterator[count++];
                if ( item_ ) {
                    return {
                        value: [ fn_key ( item_ ), fn_value ( item_ ) ],
                        done: false,
                    };
                }
                else {
                    return {
                        done: true,
                    };
                }
            }
        };
    };
}

// ManeObjIterator ();
//
// Object.defineProperties ( Object.prototype,
//                           {
//                               'Symbol(Symbol.iterator)': {
//                                   enumerable: false,
//                                   writable: true,
//                               },
//                           } );
// debugger;
ManeObjIterator.help = `ManeObjIterator = () => {}`;

ManeObjIterator.call = () => console.log ( ManeObjIterator );

module.exports = ManeObjIterator;