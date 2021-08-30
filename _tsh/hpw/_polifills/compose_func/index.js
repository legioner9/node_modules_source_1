'use strict';

const compose = (...fns) => x => fns.reduce((acc, cur) => cur(acc), x);

module.exports = compose;
