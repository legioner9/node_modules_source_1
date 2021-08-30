'use strict';

const nameOfMethod = 'doIt';
const objMeth = {
    meth1: function () {
        console.log ( 'meth1' );
    },
    meth2: function meth_obj () {
        console.log ( 'meth2' );
    },
    meth3() {
        console.log ( 'meth3' );
    },
    meth4:() => {
        console.log ( 'meth4' );
    },

    [nameOfMethod](){console.log ( 'meth5' )},
    [nameOfMethod+'_w'] : () =>console.log ( 'meth6' ),

};
debugger;

