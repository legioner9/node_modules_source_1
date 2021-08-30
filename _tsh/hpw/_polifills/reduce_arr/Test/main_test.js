'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
const _tsh = _require('_tsh');

debugger
const reduce_arr = _tsh.hpw._polifills.reduce_arr;

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum);
console.log({ res, count });

const res2 = reduce_arr(sum, 0, arr);
console.log({ res2 });
