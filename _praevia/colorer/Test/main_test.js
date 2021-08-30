const { _require } = require ( 'st_require' );
const arht = new (_require ( '_aop' ).archetypes.class.arht);
const _node = _require ( '_node' );
const _util = _require ( '_praevia' );

debugger
const colorer = _util.colorer

const SALUTATION = 'Ave';

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

// Functions

const colorize = (name) => {
  let res = '';
  const letters = name.split('');
  let color = 0;
  for (const letter of letters) {
    res += colorer(letter, color++);
    if (color > COLORS.length) color = 0;
  }
  return res;
};

const greetings = (name) => (
  name.includes('Augustus') ?
    `${SALUTATION}, ${colorize(name)}!` :
    `Hello, ${name}!`
);

// Usage

const fullName = 'Marcus Aurelius Antoninus Augustus';
console.log(greetings(fullName));

const shortName = 'Marcus Aurelius';
console.log(greetings(shortName));