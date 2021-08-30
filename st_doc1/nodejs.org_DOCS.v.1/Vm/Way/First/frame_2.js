const vm = require('vm');

const x = 1;

const context = {
    module: {}, console,
    require: name => {
        if (name === 'fs') {
            console.log('Module fs is restricted');
            return null;
        }
        return require(name);
    },
    x: 2
};
const code = `x +=40 ; let y = 34;const fs = require('fs');
const path = require('path');debugger;`; // let y mean
// only in closure

context.global = context;
vm.createContext(context);

vm.runInContext(code, context);
console.log({vmx: context.x, vmy: context.y}); // x = 42
// y = undefined
console.log({x}); // x = 1
debugger;
