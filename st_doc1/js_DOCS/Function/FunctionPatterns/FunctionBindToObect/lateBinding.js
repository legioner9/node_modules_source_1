'use strict';

function move(x, y) {
    this.x += x; // this = undefined
    this.y += y;
}

function toString() {
    return `[${this.x}, ${this.y}]`; // this = undefined
}

const p1 = { x: 10, y: 20 };
const p1move = move.bind(p1); // this = p1
const p1toString = toString.bind(p1); // this = p1
p1move(-5, 10);