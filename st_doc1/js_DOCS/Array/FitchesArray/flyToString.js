const arr = [ 2, '4', [ 'arr', 15 ], { 'a': 'aa' } ];

const str1 = arr + ''; // !! arr.toString
const str2 = arr.toString ();

const str3 = JSON.stringify ( arr );
const arr_copy_json = JSON.parse ( str3 );

if(arr_copy_json !== arr ) console.log('arr_copy_json !== arr')// true

const str_join = arr.join ( ',' );
const arr_copy_join = str_join.split ( ',' );

//str1: "2,4,arr,15,[object Object]"
// str2: "2,4,arr,15,[object Object]"
// str3: "[2,"4",["arr",15],{"a":"aa"}]"
// str_join: "2,4,arr,15,[object Object]
// arr_copy_join: (5) ["2", "4", "arr", "15", "[object Object]"]
// arr_copy_json: Array(4)
//   0: 2
//   1: "4"
//   2: (2) ["arr", 15]
//   3: {a: "aa"}
debugger;