'use strict';
'use ndb';

let Parent;
const obj = { a: 34 };
debugger
{
    Parent = class {
        constructor () {
            console.log ( this );
        };

        meth_proto_par ( d ) {
            return this.a < d;
        }
    };

}
// obj.__proto__ = Parent.prototype
Object.setPrototypeOf ( obj, Parent.prototype );
const if_ = obj.meth_proto_par(10) // 34 < 10 false
debugger
