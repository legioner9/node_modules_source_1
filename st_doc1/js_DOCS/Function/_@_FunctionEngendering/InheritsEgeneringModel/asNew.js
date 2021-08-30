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
    // @___Fip{Child.prototype = new Parent}

    // name: "Child"
    // prototype:
    // constructor: ƒ ( a )

    // name: "Parent"
    // prototype:
    // meth_proto_par: ƒ ( d )
    // constructor: ƒ ( a, b )

    Child.prototype = new Parent;
    Child.prototype.constructor = Child;

    // prototype: Parent
    //      constructor: ƒ ( a )
    //      _a: undefined
    //      _b: undefined
    //      __proto__:
    //          meth_proto_par: ƒ ( d )
    //          constructor: ƒ ( a, b )
debugger
    Child.prototype.meth_proto_child = function () {
        return this;
    };

    // prototype: Parent
    //      constructor: ƒ ( a )
    //      meth_proto_child: ƒ ()
    //      _a: undefined
    //       _b: undefined
    //      __proto__:
    //          meth_proto_par: ƒ ( d )
    //          constructor: ƒ ( a, b )
}

debugger
const par = new Parent ( 'one ', 'two ' );
par.meth_proto_par ( 'par!' );
const child = new Child ( 'three' );
child.meth_proto_child ();
debugger
