'use strict';
var someString = new String ( "hi" );          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
    return { // this is the iterator object, returning a single element, the string "bye"
        next: function () {
            if ( this._first ) {
                this._first = false;
                return { value: "bye", done: false };
            }
            else {
                return { done: true };
            }
        },
        _first: true
    };
};

// [ ...someString ];                             // ["bye"]
// someString + "";                               // "hi"