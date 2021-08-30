'use strict';

const matrix = [
    [ 7, 10, 1, 5, 2 ],
    [ 6, -1, 7, 2, 3 ],
    [ 1, 2, 4, -8, 2 ],
    [ -6, 4, 8, 2, 0 ],
];
const min = ( a, b ) => ( a < b ? a : b ); // Arr to min of items
const max = ( a, b ) => ( a > b ? a : b ); // Arr to max of items

const res = matrix
    .map ( row => row.reduce ( max ) )
    .reduce ( ( acc, rowMax ) => acc + rowMax );
