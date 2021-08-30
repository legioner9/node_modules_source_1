'use strict';

const r = 0b1;
const w = 0b10;
const add = 0b100;
// r&w = r&add = w&add = 0;

const user = r | w;

const accsess_w = !!(user & w);//= (r | w) & w =  r & w | w & w = r & w | true = true
const accsess_add = !!(user & add);// false
debugger
