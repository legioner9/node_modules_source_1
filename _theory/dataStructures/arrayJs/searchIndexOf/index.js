'use strict';

const findByIndex = (arr, location) => (
  0 < location && location <= arr.length ?
    arr[location - 1] :
    new Error(`"${location}" out of range`));

const findByItem = (arr, item) => {
  const index = arr.indexOf(item);
  return ~index ? index + 1 : new Error(`"${item}" out of set`);
};

module.exports = { findByIndex, findByItem };
