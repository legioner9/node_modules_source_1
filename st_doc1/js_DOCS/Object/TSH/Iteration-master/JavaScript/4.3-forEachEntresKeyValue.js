'use strict';

const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map_from_obj = new Map ( Object.entries ( obj ) );

for ( let [ key, value ] of map_from_obj.entries () ) {
    console.log ( `${ key }: ${ value }` );
}

if ( 'b' in obj ) console.log ( obj['b'] ); // bb

const keys_obj = Object.keys ( obj );
const values_obj = Object.values ( obj );
const entries_obj = Object.entries ( obj );
//map_from_obj: Map(3)
// [[Entries]]
// 0: {"a" => 1}
// 1: {"b" => "bb"}
// 2: {"c" => Object}
// key: "c"
// value:
// d: "dd"
//
// keys_obj: Array(3)
// 0: "a"
// 1: "b"
// 2: "c"
// length: 3
//
// entries_obj: Array(3)
// 0: (2) ["a", 1]
// 1: (2) ["b", "bb"]
// 2: Array(2)
// 0: "c"
// 1: {d: "dd"}
//
// values_obj: Array(3)
// 0: 1
// 1: "bb"
// 2: {d: "dd"}
debugger;