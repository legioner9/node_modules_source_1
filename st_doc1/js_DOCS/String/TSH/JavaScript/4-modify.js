'use strict';

const name = 'Marcus Auarelius';

console.log ();
console.log ( `name = ${ name }` );

console.log ();
console.log ( `name.split(' ') = '${ JSON.stringify ( name.split ( ' ' ) ) }'` );
console.log ( `name.replace('r', 'R') = '${ name.replace ( 'r', 'R' ) }'` );
console.log ( `name.replace(/r/g, 'R') = '${ name.replace ( /r/g, 'R' ) }'` );
console.log ( `'Ave '.concat(name, '!') = '${ 'Ave '.concat ( name, '!' ) }'` );
const sre = name.replace ( /ar/g, 'JJ' ); /// "MJJcus AuJJelius"
debugger;