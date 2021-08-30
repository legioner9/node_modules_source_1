const { _require } = require ( 'st_require' );
const arht = new (_require ( '_aop' ).archetypes.class.arht);
const _node = _require ( '_node' );
const _util = _require ( '_util' );

debugger
const Adder = _util.dataStructures.adder
{
    const { value, log } = new Adder(5).add(-8).add(11);
    console.log(value);
    const [a,b,c] = log;
    console.log(a,b,c);
  }
debugger
