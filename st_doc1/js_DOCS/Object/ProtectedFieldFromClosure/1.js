'use strict';

const point = (x, y) => {
    const p = {};

    p.move = (dx, dy) => {
        x += dx;
        y += dy;
    };

    p.toString = () => `[${x}, ${y}]`;

    return p;
};

const p1 = point(10, 20);
p1.move(-5, 10); // x and y is private field from closure