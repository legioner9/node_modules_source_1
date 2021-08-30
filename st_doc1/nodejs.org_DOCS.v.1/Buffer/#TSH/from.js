const b1 = Buffer.from([1, 2, 3, 4, 5, 6]);

console.log(b1);

const b2 = Buffer.from('Marcus Aurelius (Марк Аврелий)');
const b3 = Buffer.from('sdc');

console.log(b3.toString('hex'));
console.log(b3.toString('base64'));
console.log(b3.toString('utf8'));
console.log(b3.toString('binary'));
console.log(b3);
debugger;