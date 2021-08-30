const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');

debugger

const arg_ext = _util.dataStructures.arg_ext;

const Point = class {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

const ePoint = arg_ext(Point);
const epoint = new ePoint(1, 2, 3);