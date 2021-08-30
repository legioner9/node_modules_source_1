const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );

const fn_key_ = function ( item ) {
    return item[0];
};

const fn_value_ = function ( item ) {
    return item[1];
};

function DefineObjIterator ( obj, fn_key = fn_key_, fn_value = fn_value_ ) {
    obj.__proto__[Symbol.iterator] = () => {

        const iterator = Object.entries ( obj );
        let count = 0;

        return {
            next: () => {

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

// next = {
//         value: next_.value, [[Array(key,value)]]
//         done: next_.done,
//         }
debugger
DefineObjIterator ( obj );
for ( const item of obj ) {
    debugger
}