'use strict';
const name = 'global';

function f1 ( a, b ) {
    debugger;
    if ( this ) console.log ( 'name :: ', this.name, ' f1(' + a + ', ' + b + ')' );
    else console.log ( 'name :: ', name, ' f1(' + a + ', ' + b + ')' );
}

const arr = [ 2, 3 ];
const context_obj = {
    name: 'local',
    f1,
};

f1 ( ...arr ); //name ::  global  f1(2, 3)
f1.call ( context_obj, ...arr ); //name ::  local  f1(2, 3)

context_obj.f1 ( ...arr ); //name ::  local  f1(2, 3)
const f11 = context_obj.f1; // lost ObjContext
f11 ( ...arr ); //name ::  global  f1(2, 3)

const bind_f11 = f11.bind ( context_obj ); // bind ObjContext
const bind_f115 = f11.bind ( context_obj, 5 ); // bind ObjContext and firs argument

debugger
bind_f11 ( ...arr ); //name ::  local  f1(2, 3)
bind_f115 ( 8 ); //name ::  local  f1(5, 8)
f1.apply ( context_obj, arr ); //name ::  local  f1(2, 3)
