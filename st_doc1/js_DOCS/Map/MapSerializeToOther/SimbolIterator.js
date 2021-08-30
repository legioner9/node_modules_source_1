const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map(Object.entries(obj));

map[Symbol.iterator] = function() {
  debugger
  const iterator = this.entries();
  return {
    next: () => {
      const next_ = iterator.next();
      const value_ = [next_.value[0] + '_value', next_.value[1]];
      return {
        value: value_,
        done: next_.done,

      };
    }
  };
};
debugger;
for (const item of map) {
  console.log({ item });
}


debugger
