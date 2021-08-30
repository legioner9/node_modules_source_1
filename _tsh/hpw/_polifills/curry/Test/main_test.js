'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
const _tsh = _require('_tsh');

const curry = _tsh.hpw._polifills.curry;

const sum4 = (a, b, c, d) => (a + b + c + d);
debugger
const f = curry(sum4);
const y1 = sum4(1, 2, 3, 4);
const y2 = f(1, 2, 3, 4);
const y3 = f(1, 2, 3)(4);
const y4 = f(1, 2)(3)(4);
const y5 = f(1)(2)(3)(4);
const y6 = f(1)(2, 3, 4);
const y7 = f(1)(2)(3, 4);
const y8 = f(1, 2)(3, 4);
console.log(y1, y2, y3, y4, y5, y6, y7, y8);

debugger