const LOCK = 0;
const UNLOCK = 1;

class BinarySMPH {
    constructor ( shared, offset = 0, init = false ) {
        this.lock = new Int8Array ( shared, offset, 1 );
        if ( init ) this.lock[0] = UNLOCK;
    }

    enter () {
        while ( this.lock[0] === LOCK ) ;
        this.lock[0] = LOCK;
    }

    leave () {
        if ( this.lock[0] === UNLOCK ) {
            throw new Error ( 'Cannot leave unlocked' +
                                  ' BinarySMPH' );
        }
        this.lock[0] = UNLOCK;
    }
}

class CountSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            this.count = initial;
        }
    }

    enter () {
        while ( this.count[0] === 0 ) ;
        this.count[0]--;
    }

    leave () {
        this.count[0]++;
    }
}

module.exports = {
    BinarySMPH,
    CountSMPH,
};