'use strict';

class Point {
    constructor ( x, y ) {
        this.x = x;
        this.y = y;
    }

    static z = 10;

    move ( x, y ) {
        this.x += x;
        this.y += y;
    }

    toString () {
        return `[${ this.x }, ${ this.y }]`;
    }

    static from ( obj ) {
        const { x, y } = obj;
        return new Point ( x, y );
    }

    get areaAtZero () {
        return this.x * this.y;
    }

    set maltyMoveObj ( malty ) {
        if ( ( malty instanceof Object ) && malty.x && malty.y ) {
            this.x = this.x * malty.x;
            this.y = this.y * malty.y;
        }
        else if ( typeof malty === 'number' ) {
            this.x = this.x * malty;
            this.y = this.y * malty;
        }
        else console.error ( 'argument maltyMove is not valid' );
    }

    set maltyMoveArr ( malty ) {
        if ( ( malty instanceof Array ) && malty[0] && malty[1] ) {
            this.x = this.x * malty[0];
            this.y = this.y * malty[1];
        }
        else if ( typeof malty === 'number' ) {
            this.x = this.x * malty;
            this.y = this.y * malty;
        }
        else console.error ( 'argument maltyMove is not valid' );
    }
}

const point = new Point ( 3, 5 );
debugger
const point_s = point.areaAtZero;
point.maltyMoveArr = [ 2, 2 ];
point.maltyMoveObj = { x:.5, y:.5};
debugger;