const fn_key_ = function ( item ) {
    return item[0];
};

const fn_value_ = function ( item ) {
    return item[1];
};

function DefineObjIterator ( obj, fn_key = fn_key_, fn_value = fn_value_, opt = false ) {
    if ( opt === true ) debugger;
    obj.__proto__[Symbol.iterator] = () => {

        const iterator = Object.entries ( obj );
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

DefineObjIterator.help = `ModuleFunc = () => {}`;

DefineObjIterator.call = () => console.log ( DefineObjIterator );

module.exports = DefineObjIterator;