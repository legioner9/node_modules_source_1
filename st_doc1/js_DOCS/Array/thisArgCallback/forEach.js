const ob_context = {
    a: 2,
};
[ 1, 2 ].forEach ( function ( item ) {
    debugger;
    console.log ( item * this.a );
},ob_context );