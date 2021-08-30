require ( './chain' );

function A ( a ) {
    this.a = a;
}

A.prototype.methA = function () {
    console.log ( this.a );
};

function B ( b ) {
    this.b = b;

}

B.prototype.methB = function () {
    console.log ( 'bbbbb' );
};

function C ( c ) {
    this.c = c;
}

C.prototype.methC = function () {
    console.log ( 'ccccc' );
};

Object.appendChain ( A.prototype, [B.prototype, C.prototype] );
debugger
const ab = new A ( 'aaa' );
const b = new B ( 'bbb' );
const c = new C ( 'ccc' );

debugger;