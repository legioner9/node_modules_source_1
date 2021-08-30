'use strict';
'use ndb';

let Parent, Parent2, Child, Child2;
{
    Parent = function ( a, b ) {
        this._a = a;
        this._b = b;
    };

    Parent.prototype.meth_proto_par = function ( d ) {
        return this._a + this._b + d;
    };

    Parent2 = function ( c, d ) {
        this._c = c;
        this._d = d;
    };

    Parent2.prototype.meth_proto_par2 = function ( d ) {
        return this._c + this._d + d;
    };

    Child = function ( a ) {
        Parent.call ( this, a, a );
    };

    Child2 = function ( a ) {
        Parent.call ( this, a, a );
        Parent2.call ( this, a, a );
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

    const PP = Parent.prototype;
    const P2P = Parent2.prototype;


    Object.setPrototypeOf ( Child2.prototype, { PP, P2P }  );

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
debugger
const child2 = new Child2 ( 'four' );
const if1 = child2 instanceof Parent
const if2 = child2 instanceof Parent2
child2.meth_proto_par()
child2.meth_proto_par2()

//
