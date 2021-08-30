'use strict';
'use ndb';

const arr = [ 1, 'a', [ 'b', 'bb', 'bbb' ], { c: 'cc' } ];
const json_arr = JSON.stringify ( arr );
// json_arr: "[1,"a",["b","bb","bbb"],{"c":"cc"}]"

const arr_liter = arr + '';
// arr_liter: "1,a,b,bb,bbb,[object Object]"
const arr_toString = arr.toString ();
// arr_toString: "1,a,b,bb,bbb,[object Object]"
const arr_join = arr.join ( '?' );
// arr_join: "1?a?b,bb,bbb?[object Object]"
const arr_join_split = arr_join.split ( '?' );
//arr_join_split: (4) ["1", "a", "b,bb,bbb", "[object Object]"]

const json_str = JSON.stringify ( 'Legioner' );
// json_str: ""Legioner""
const json2_str = JSON.stringify ( json_str );
// json2_str: ""\"Legioner\"""
const json3_str = JSON.stringify ( json2_str );
// json3_str: ""\"\\\"Legioner\\\"\"""
const parse3_str = JSON.parse ( json3_str );
// parse3_str: ""\"Legioner\"""
debugger
