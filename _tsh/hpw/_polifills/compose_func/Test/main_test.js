'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
debugger
const polifills = _require('_tsh').hpw._polifills;

const compose = polifills.compose_func;

// const compose = (...fns) => x => fns.reduce((acc, cur) => cur(acc), x);

const f1 = x => -x;
const f2 = x => x + 1;
compose(f1, f2)(4);
