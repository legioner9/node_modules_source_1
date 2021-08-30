const Ex = require ( 'st_ex1' );
const arrEnt = Ex.SetIteration.Map.ArrMapEntries;
const arrKeys = Ex.SetIteration.Map.ArrMapKeys;
const arrValues = Ex.SetIteration.Map.ArrMapValues;

debugger

const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );

const arr1 = arrEnt ( map );
const arr2 = arrKeys ( map );
const arr3 = arrValues ( map );

//arr1: Array(3)
// 0: (2) ["a", 1]
// 1: (2) ["b", "bb"]
// 2: Array(2)
// 0: "c"
// 1: {d: "dd"}

// arr2: Array(3)
// 0: "a"
// 1: "b"
// 2: "c"
// length: 3

// arr3: Array(3)
// 0: 1
// 1: "bb"
// 2: {d: "dd"}


debugger