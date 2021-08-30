const vm = require('vm');

const x = 1;

const context = {x: 2};
const code = `x +=40 ; y = 34;`;

vm.createContext(context);

vm.runInContext(code, context);
console.log({vmx: context.x, vmy: context.y}); // x = 42
// y = 34
console.log({x}); // x = 1
