'use strict';
'use ndb';

{
    // @___Fdp{define_direct_CONS}
    // # in CONS direct assignment ________________________

    const Class_func = function ( a = '' ) {
        this._a = a;
        this.meth_prototype = ( d = '' ) => {
            return ( this._a + d );
        }; // meth_prototype is ownObject NOT in prototype
    };

    Class_func.meth_static = ( x = '' ) => {
        return x.toUpperCase ();
    };

// const call_class = Class_func ('be error') this is undefined
    const call_static = Class_func.meth_static ( 'be error?' ); // "BE ERROR?"

    const new_inst = new Class_func ( 'Legion' );
// new_inst: Class_func
// meth_prototype: ( d = '' ) => {…}
// _a: "Legion"
// __proto__:
// constructor: ƒ ( a = '' ) {name: 'Class_func'}

    const is_instance = new_inst instanceof Class_func; // true === exists constructor name 'Class_func'
    const call_meth_proto = new_inst.meth_prototype ( ' ? ' ); // "Legion ? "

}

{
    // @___Fdp{CONS.prototype after define CONS}
    // # assigment in CONS.prototype after define CONS____________________________

    const Class_func = function ( a = '' ) {
        this._a = a;
    };

    Class_func.meth_static = ( x = '' ) => {
        return x.toUpperCase ();
    };

    Class_func.prototype.meth_prototype = function ( d = '' ) {
        return ( this._a + d );
    };

    const new_inst = new Class_func ( 'Legion' );
    // new_inst: Class_func
    // _a: "Legion"
    // __proto__:
    // meth_prototype: ( d = '' ) => {…}
    // constructor: ƒ ( a = '' ) {name: 'Class_func'}

    const call_meth_proto = new_inst.meth_prototype ( ' ? ' ); // "Legion ? "
    const call_static = Class_func.meth_static ( 'be error?' ); // "BE ERROR?"

}

{
    // @___Fdp{ES6 syntax 'class'}
    // # define CONS from 'ES6 syntax 'class''______________________________________

    class Class_func {
        constructor ( a ) {
            this._a = a;
        }

        meth_prototype ( d = '' ) {
            return ( this._a + d );
        }

        static meth_static ( x = '' ) {
            return x.toUpperCase ();
        };
    }

    const new_inst = new Class_func ( 'Legion' );
    // new_inst: Class_func
    // _a: "Legion"
    // __proto__:
    // constructor: class Class_func
    // meth_prototype: ƒ meth_prototype( d = '' ) ((enumerable))

    const call_meth_proto = new_inst.meth_prototype ( ' ? ' ); // "Legion ? "
    const call_static = Class_func.meth_static ( 'be error?' ); // "BE ERROR?"

}

{
    // @___Fdp{using Closing stile}
    // # 'define Hybrid object' : with using Closing stile_________________________________
    const Class_func = a => { // a is protected or private field
        const p = {};
        p.meth_prototype = d => a + d;
        return p;
    };
    const new_inst = Class_func ( 'Legion' );
    const call_meth_proto = new_inst.meth_prototype ( ' ? ' ); // "Legion ? "

}

{
    // @___Fdp{late binding}
    // # late binding : 'method first object after' Bind stile
    const meth_prototype = function( d = '' ){
        return ( this._a + d );
    };
    const obj = { _a: 'Legion' };

    const new_inst_meth_prototype = meth_prototype.bind ( obj );
    const call_meth_proto = new_inst_meth_prototype ( ' ? ' ); // "Legion ? "

}

{
    // @___Fdp{behavior from inner hash}
    // # 'behavior from inner hash' function second behavior call
    const mix = ( key = '' ) => {
        const add = mix.items[key] || 'WTF?';
        return ( x = '' ) => x + add;
    };

    mix.items = {
        a: 'aa',
        b: 'bb',
    };

    const mix_a = mix ( 'a' );
    const mix_a_call = mix_a ( 'call ' ); // mix_a_call: "call aa"

}
