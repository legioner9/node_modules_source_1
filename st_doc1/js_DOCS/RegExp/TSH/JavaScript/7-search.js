'use strict';
// serch analog indexOf
const rx1 = /def/g;
const s1 = 'abcdefgabc';
const res1 = s1.search(rx1);
/// res1: 3 (pos)


const rx2 = /cba/g;
const s2 = 'abcdefgabc';
const res2 = s2.search(rx2);
console.log(res2);
/// res2: -1 ()
debugger
