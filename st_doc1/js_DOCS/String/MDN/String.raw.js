const se = String.raw`Привет\n${ 2 + 3 }!`; /// "Привет\n5!"
const sen = String.raw`Привет
${ 2 + 3 }!`; ///"Привет↵5!"

const set = String.raw({ raw: 'тест' }, 0, 1, 2);
// 'т0е1с2т'
debugger;