const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
// const composeFunction = Ex.SetFunction.FuncDecor.ComposeFunction;
const composeFunction = Ini.composeFunction;

function A () {

}

function B () {

}

const arg = [ A, B ];

debugger;
composeFunction ( ...arg ) ();
