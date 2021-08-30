'use strict';
'use ndb';

let Parent, Child;
{
    Parent = function ( a, b ) {
        this._a = a;
        this._b = b;
    };

    Parent.prototype.meth_proto_par = function ( d ) {
        return this._a + this._b + d;
    };

    Child = function ( a ) {
        Parent.call ( this, a, a );
    };

}

{
    // @___Fip{setPrototypeOf(Child.prototype, Parent.prototype)}

    // name: "Child"
    // prototype:
    //      constructor: ƒ ( a )

    // name: "Parent"
    // prototype:
    //      meth_proto_par: ƒ ( d )
    //      constructor: ƒ ( a, b )

    Object.setPrototypeOf(Child.prototype, Parent.prototype);
    // Child.prototype.__proto__ = Parent.prototype

    // name: "Child"
    // prototype: Parent
    //      constructor: ƒ ( a )
    //      __proto__:
    //          meth_proto_par: ƒ ( d )
    //          constructor: ƒ ( a, b )

    Child.prototype.meth_proto_child = function () {
        return this;
        // this: Child
        // _a: "three"
        // _b: "three"
    };

    // name: "Child"
    // prototype: Parent
    //      constructor: ƒ ( a )
    //      meth_proto_child: ƒ ()
    //      __proto__:
    //          meth_proto_par: ƒ ( d )
    //          constructor: ƒ ( a, b )
}


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
// _a: "three"
// _b: "three"
//      __proto__: Parent
//      meth_proto_child: ƒ ()
//      constructor: ƒ ( a )
//          __proto__:
//          meth_proto_par: ƒ ( d )
//          constructor: ƒ ( a, b )

