const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
debugger;
// Ex.SetGlobal.AddPrototipe.ToObject.Iterator ();

Ini.addToProtoObjIterator ();
const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );

for ( const item of obj ) {
    debugger;
}