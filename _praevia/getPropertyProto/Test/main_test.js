'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
const _praevia = _require('_praevia');

const getPropertyProto =  _praevia.getPropertyProto


debugger

const ob = {
  a: 1,
  what_a() {
    console.log(`a = ${this.a} from ob`);
  }
};

const child_ob = Object.create(ob, { b: { value: '' } });
//child_ob:
// b: ""
// __proto__:
// a: 1
// what_a: ƒ what_a()
// __proto__: Object
console.log(child_ob.a);// 1

// function getPropertyProto(obj, prop) {
//   if (obj.hasOwnProperty(prop))
//     return obj[prop];
//
//   else if (obj.__proto__ !== null)
//     return getPropertyProto(obj.__proto__, prop);
//
//   else
//     return undefined;
// }

getPropertyProto(child_ob, 'a');
// 1
getPropertyProto(child_ob, 'what_a');
// ƒ what_a() {
//     console.log(`a = ${this.a} from ob`);
//   }

debugger
