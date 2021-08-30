require ( './test.js' );
require ( './simple.js' );

console.log ( 'Main file is loaded!' );

console.log ( '' );
debugger;

console.log ( require.cache ); // свойство cache объекта require, хранит закешированные модули