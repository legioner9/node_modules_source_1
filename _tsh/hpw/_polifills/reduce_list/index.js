'use strict';

const reduce_list = (fn, acc, list) => (
  list.length ? reduce_list(fn, fn(acc, list.shift()), list) : acc
);


module.exports = reduce_list;
