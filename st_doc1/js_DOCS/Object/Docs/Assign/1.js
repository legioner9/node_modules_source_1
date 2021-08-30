'use strict';
'use ndb';

const a = { b: 'c' };
const a1 = { d: 'e' };
const child = { f: 'g' };
const res_obj = Object.assign ( {}, a, a1 );
debugger
const child_incherits = Object.assign ( child.__proto__.__proto__, a.__proto__, a1.__proto__ );

