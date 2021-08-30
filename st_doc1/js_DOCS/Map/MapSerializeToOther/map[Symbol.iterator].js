const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );

//const value_ = [ next_.value[0] + '_value', next_.value[1] ];
const fn_key_ = function ( next ) {
    return next.value[0];
};
const fn_value_ = function ( next ) {
    return next.value[1];
};

function RedefineMapIterator ( map, fn_key = fn_key_, fn_value = fn_value_ ) {
    return map[Symbol.iterator] = () => {
        const iterator = this.entries ();
        return {
            next: () => {

                const next_ = iterator.next ();

                return {
                    value: [ fn_key ( next_ ), fn_value ( next_ ) ],
                    done: next_.done,

                };
            }
        };
    };
}

// next = {
//         value: next_.value, [[Array(key,value)]]
//         done: next_.done,
//         }