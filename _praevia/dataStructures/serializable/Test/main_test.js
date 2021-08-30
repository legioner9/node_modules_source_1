const { _require } = require ( 'st_require' );
const arht = new (_require ( '_aop' ).archetypes.class.arht);
const _node = _require ( '_node' );
const _util = _require ( '_util' );

const serializable = _util.dataStructures.serializable
debugger

const Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


const sPoint = serializable(Point);
const spoint = new sPoint(3,5);
console.log(spoint.toString()) //[3,5]
debugger 