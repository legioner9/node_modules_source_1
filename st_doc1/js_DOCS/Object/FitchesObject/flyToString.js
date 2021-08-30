const arr = [ 2, '4', [ 'arr', 15 ], { 'a': 'aa' } ];

const str1 = arr + ''; // !! arr.toString
const str2 = arr.toString ();
const str3 = JSON.stringify ( arr );

const arr_copy = JSON.parse ( str3 );

debugger;