'use strict';

function hashArgs () {

    const args = arguments[0];

    function defaultArgs ( defObjArgs, args) {
        for ( const key in defObjArgs ) {
            debugger;
            args[key] = args[key] || defObjArgs[key];
        }
    }

    const defArg = { a: 'a', b: 'b' };
    defaultArgs ( defArg ,args);

}

const ha = hashArgs ( { a: 'z', y: 'y' } );

// Hash style for default parameter values
//
function fnHash ( args ) {
    args.a = args.a || [ 7, 25, 10 ];
    args.b = args.b || 'Hello';
    args.c = args.c || 100;
    console.dir ( args );
}

fnHash ( { a: [ 1, 2, 3 ], b: 'Hi', c: 3 } );
fnHash ( { b: 'World' } );
fnHash ( { c: 7 } );
