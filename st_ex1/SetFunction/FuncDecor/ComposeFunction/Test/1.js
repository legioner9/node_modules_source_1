const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
// const composeFunction = Ex.SetFunction.FuncDecor.ComposeFunction;
const composeFunction = Ini.composeFunction;

debugger;

function length ( a ) {
    throw  Error('eee') ;
}

composeFunction ( length ) ( '1' );
/// error from ComposeFunction fn.name :: length , arguments :: 1
/// Uncaught Error: eee

