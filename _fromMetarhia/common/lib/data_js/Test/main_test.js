'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
const _fromMetarhia = _require('_fromMetarhia');

const data_js = _fromMetarhia.common.lib.data_js;

// data_js:
//   clone: val => {…}
//   copy: ds => ds.slice()
//   deleteByPath: (data, dataPath) => {…}
//   duplicate: val => duplicateWithReferences(val, new Map())
//   getByPath: (data, dataPath) => {…}
//   isScalar: value => SCALAR_TYPES.includes(typeof value)
//   merge: (...args) => {…}
//   mergeObjects: (merger, ...objs) => {…}
//   setByPath: (data, dataPath, value)

const { clone, copy } = data_js;

const c_data = clone(data_js);

const a = Object.create({ a: 'a' });
debugger
const c_a = clone(a);
const cc_a = copy(a);

