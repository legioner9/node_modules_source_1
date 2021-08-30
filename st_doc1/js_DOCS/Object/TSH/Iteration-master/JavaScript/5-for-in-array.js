'use strict';

const numbers = [ 7, 10, 1, 5, 2 ];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for ( const i in numbers ) {
    const value = numbers[i];
    console.log ( i, typeof i, value );
}


//numbers: Array(6)
// 0: 7
// 1: 10
// 2: 1
// 3: 5
// 4: 2
// 5: 20
//   fields of Arr as objects
// -10: "Value3"
// field1: "Value1"
// field2: "Value2"

debugger;