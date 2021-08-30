'use strict';
'use ndb';

let Parent;
const obj = { a: 34 };
debugger
{
    // @___Fip{ES6 Late Bind prototype}
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
debugger
