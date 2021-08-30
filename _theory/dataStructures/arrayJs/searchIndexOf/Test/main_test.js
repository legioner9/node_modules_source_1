'use strict';

const { _require } = require('st_require');
const _node = _require('_node');
const _theory = _require('_theory');

const { findByIndex, findByItem } = _theory.dataStructures.arrayJs.searchIndexOf;

const arr = ['one', 'two', 'three'];
const res = findByIndex(arr, 1);
const res_1 = findByIndex(arr, 5);

const res_2 = findByItem(arr, 'two');
const res_3 = findByItem(arr, 'any');
debugger
