console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints to stdout "process: 365.227ms 42".
doExpensiveProcess2(value);
console.timeEnd('process');