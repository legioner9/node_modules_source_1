'use strict';

const Color = function ( col ) {
    this.color = col;
};

Color.prototype.bright = function ( upp ) {
    this.color += upp;
};
const Point = function ( x, y ) {
    this.x = x;
    this.y = y;
};

Point.prototype.move = function ( dx, dy ) {
    this.x += dx;
    this.y += dy;
};

function Rect ( x, y, width, height ) {
    Point.call ( this, x, y );
    this.width = width;
    this.height = height;
}

Rect.prototype.perimeter = function () {
    return this.width * this.height;
};

function Lellip ( x, y, z, width, height, depth, color ) {
    Rect.call ( this, x, y, width, height );
    Color.call ( this, color );
    this.z = z;
    this.depth = depth;
}

Lellip.prototype.volume = function () {
    return this.width * this.height * this.depth;
};

Object.setPrototypeOf ( Rect.prototype, Point.prototype );
Object.setPrototypeOf ( Lellip.prototype, Rect.prototype );
debugger
Object.setPrototypeOf ( Lellip.prototype, Color.prototype );
// Rect.prototype.toString = function () {
//     return `[${ this.x }, ${ this.y }, ${ this.width }, ${ this.height }]`;
// };
//
// function Square ( x, y, side ) {
//     Rect.call ( this, x, y, side, side );
// }

debugger;
// Object.setPrototypeOf ( Square.prototype, Rect.prototype );
// Object.setPrototypeOf ( Point.prototype, Square.prototype );

// const util = require('util');
// util.inherits(Square, Rect); // for Node.js

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// Square.prototype = new Rect();
// Square.prototype.constructor = Square;
const l1 = new Lellip ( 5, 8, 4, 70, 80, 90 );
debugger;