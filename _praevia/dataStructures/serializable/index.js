'use strict'


const serialiszible = (Category) => class extends Category {
    toString() {
        return `[${this.x},${this.y}]`;
    }
}


module.exports = serialiszible