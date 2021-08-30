'use strict';

// fn add cashing to (res = 'value' + key)
const fn = () => {
    console.log('Generate cache');
    const cache = {};
    return key => {
        let res = cache[key];
        if (res) {
            console.log('From cache');
            return res;
        } else {
            console.log('Calculate and save to cache');
            // calculate res
            res = 'value' + key;
            cache[key] = res;
            return res;
        }
    };
};

const f1 = fn();
const f2 = fn();
debugger
f1(1);
f1(2);
f1(1);
f1(2);

f2(1);
f2(2);
f2(1);
f2(2);
