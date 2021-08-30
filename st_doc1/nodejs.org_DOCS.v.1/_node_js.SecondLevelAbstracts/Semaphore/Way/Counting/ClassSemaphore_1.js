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
            this.count[0] = initial;
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

class CallbackQueueSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            this.count[0] = initial;
        }
        this.queue = [];
    }

    enter ( callback ) {
        if ( this.count[0] > 0 ) {
            this.count[0]--;
            setTimeout ( callback, 0 );
        }
        else {
            this.queue.push ( callback );
        }
    }

    leave () {
        this.count[0]++;
        if ( this.queue.length > 0 ) {
            const cb = this.queue.shift ();
            this.count[0]--;
            setTimeout ( cb, 0 );
        }

    }
}

module.exports = {
    BinarySMPH,
    CountSMPH,
    CallbackQueueSMPH,
};