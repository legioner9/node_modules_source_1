const emt = new ( require ( 'events' ) ).EventEmitter;

class Pr {
    constructor ( count = 0 ) {
        this.count = count;
    }

    prn () {
        this.count++;
        console.log ( this.count );
        return this.count;
    }
}

const pr = new Pr ( 10 );

debugger;
emt.emit ( 'event' );// nothing !
emt.on ( 'event', ( ...args ) => {
    pr.prn ();
    console.log('...args :', args)
} );
emt.emit ( 'event', 'r' ); // 11 ...args : [r]

