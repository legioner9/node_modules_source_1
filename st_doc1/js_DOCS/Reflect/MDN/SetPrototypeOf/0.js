//Статический Reflect.setPrototypeOf()метод такой же, как и Object.setPrototypeOf(), за исключением его возвращаемого типа. Он устанавливает прототип (т. Е. Внутреннее [[Prototype]]свойство) указанного объекта для другого объекта или в nullи возвращает, trueесли операция прошла успешно, или falseиным образом .

const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// expected output: false
