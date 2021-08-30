function MyConstructor() {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

var myArray = [4, 'Привет, мир!', false];
var myInstance = MyConstructor.construct(myArray);

alert(myInstance.property1);                // выведет 'Привет, мир!'
alert(myInstance instanceof MyConstructor); // выведет 'true'
alert(myInstance.constructor);              // выведет 'MyConstructor'
