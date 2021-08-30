const b1 = Buffer.from([1, 44, 78, 23]);
const b2 = Buffer.alloc(10).fill('y');

const b3 = Buffer.concat([b1, b2]).toString();


debugger;