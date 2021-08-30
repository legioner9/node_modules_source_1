'use strict';
const Ex = require ( 'st_ex1' );
const objIter = Ex.SetIteration.Object.DefineObjIterator;

const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );

objIter ( obj );
for ( const item of obj ) {
    debugger;
}
