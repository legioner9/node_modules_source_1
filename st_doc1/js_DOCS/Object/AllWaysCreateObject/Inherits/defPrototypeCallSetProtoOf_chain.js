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
debugger;
Object.setPrototypeOf ( Lellip.prototype, Color.prototype );

const l1 = new Lellip ( 5, 8, 4, 70, 80, 90 );
debugger;