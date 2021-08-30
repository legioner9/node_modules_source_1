const vm = require('vm');
const fs = require('fs');
const path = require('path');
const timers = require('timers');
const events = require('events');

const x = 1;

const api = {timers, events};

const context = {
    module: {}, console,
    require: name => {
        if (name === 'https') {
            console.log('Module https is restricted');
            return null;
        }
        return require(name);
    },
    x: 2
};

// context.global = context;
vm.createContext(context);

fs.readFile(path.join(__dirname, 'code_4.js'), (e, code) => {
    if (e) throw e;
    runCode(code);
});

function runCode(d) {
    console.log({vmx: context.x, vmy: context.y});//{vmx: 2, vmy: undefined}

    d = `api => {${d}}`;

    let script = new vm.Script(d, {timeout: 1000});
    const f = script.runInNewContext(context, {timeout: 1000});
// with inject api throw closure func
    f(api);
    const exported = context.module.exports;
    console.log({exported});
    console.log({vmx: context.x, vmy: context.y});//{vmx: 42, vmy: undefined}
}

// y = undefined
console.log({x}); // x = 1
