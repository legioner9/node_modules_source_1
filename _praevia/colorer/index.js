// area_function_v.1.1.0

const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;

const COLORS = [
    /* 0 */ 'black',
    /* 1 */ 'red',
    /* 2 */ 'green',
    /* 3 */ 'yellow',
    /* 4 */ 'blue',
    /* 5 */ 'magenta',
    /* 6 */ 'cyan',
    /* 7 */ 'white'
  ];

const colorer = (string, color) => `\x1b[3${color}m${string}\x1b[0m`;

module.exports = colorer;
