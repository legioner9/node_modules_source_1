'use strict';

// if 64bit architecture 0b110 = 0000 0000 0000 0000 0000 0000 0000 0110

const a_0 = (0b10100 & 0b10010).toString(2);// first false 0b10000
const a_1 = (0b10100 & 0b10010).toString(2);// first false 0b10000
const a_2 = (0b10100 | 0b10010).toString(2);// first true 0b10110
const a_3 = (0b10100 ^ 0b10010).toString(2);// first true but not both 0b110
// data ^ key ^ key = data

// -a = ~a +1 ; ~a = -a - 1;~(-1) = -(-1) - 1;
const a_4 = (~0b10100).toString(2);//0b(-10101)
const a_4_1 = (~9);//-10
// if(~a.indexOf(b,c)) {}
// [3,2,'rr'].indexOf(2) >> 1
// [3,2,'rr'].indexOf(7) >> -1

const a_5 = (0b10100 << 2).toString(2);//0b10000
const a_5_1 = (0b11000000000000000000000000000001 << 2).toString(2);//0b100
const a_5_2 = (0b11000000000000000000000000000001 << 34).toString(2);//0b100
const a_5_3 = (0b11000000000000000000000000000001 << 32).toString(2);//0b(-111111111111111111111111111111) 30 digits
const a_6 = (0b1100011 >> 4).toString(2);//0b110


debugger
