'use strict';

const name = 'Marcus Aurelius';

console.log ();
console.log ( `name = '${ name }'` );

console.log ();
console.log ( `typeof name = '${ typeof name }'` );
console.log ( `name.length = ${ name.length }` );
console.log ( `name[3] = '${ name[3] }'` );
console.log ( `name.charAt(5) = '${ name.charAt ( 5 ) }'` );
console.log ( `name.charCodeAt(7) = ${ name.charCodeAt ( 7 ) }` );
const ss5 = name.charAt ( 5 ); /// "s"
const ss7 = name.charCodeAt ( 7 ) ; /// 65
debugger