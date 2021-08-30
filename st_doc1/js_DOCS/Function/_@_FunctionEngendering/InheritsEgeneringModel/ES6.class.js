'use strict';
'use ndb';

let Parent, Child;
{
    Parent = class {
        constructor ( a, b ) {
            this._a = a;
            this._b = b;
        }

        meth_proto_par ( d ) {
            return this._a + this._b + d;
        }
    };

    Child = class extends Parent {

        constructor ( a ) {
            super ( a, a );
        }

        meth_proto_child () {
            return this;
        };

    };

}
//name: "Child"
// prototype: Parent
//      constructor: class extends
//      meth_proto_child: ƒ meth_proto_child()
//          __proto__:
//          constructor: class
//          meth_proto_par: ƒ meth_proto_par(d)

// @___Fip{ES6 'extends''class'}

const par = new Parent ( 'one ', 'two ' );
// par: Parent
//      _a: "one "
//      _b: "two "
//      __proto__:
//          meth_proto_par: ƒ ( d )

const par_meth = par.meth_proto_par ( 'par!' );
// par_meth: "one two par!"

const child = new Child ( 'three' );
//child: Child
//  _a: "three"
//  _b: "three"
//  __proto__: Parent
//      constructor: class extends
//      meth_proto_child: ƒ meth_proto_child()
//      __proto__:
//          constructor: class
//          meth_proto_par: ƒ meth_proto_par(d)

child.meth_proto_child ();
debugger
