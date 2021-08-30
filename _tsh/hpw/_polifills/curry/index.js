'use strict';

const curry = (f) => (...args) => {
  if (f.length > args.length) {
    return curry(f.bind(null, ...args));
  } else return f(...args);
};

module.exports = curry;
