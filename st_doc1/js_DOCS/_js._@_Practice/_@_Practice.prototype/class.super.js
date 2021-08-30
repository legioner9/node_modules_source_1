'use strict';
'use ndb';

const Parent = class {
    constructor ( a ) {
        this._a = a;
    }

    meth_par ( x ) {
        this.res = this._a + x;
    }
};

const Child = class extends Parent {
    constructor ( a, b ) {
        super ( a );
        this._b = b;
    }

    meth_child ( x, y ) {
        super.meth_par ( x );
        this.res += this._b + y;
        return this.res;
    }
};
debugger;
const child = new Child ( 'a', 'b' );
const res = child.meth_child ( 'x', 'y' );
// res: "axby"

