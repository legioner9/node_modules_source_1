'use strict';

class ClassCallers extends ( require ( 'events' ).EventEmitter ) {
    constructor () {
        super ();
    }

    callFirst ( str, callback ) {

        setTimeout ( () => { // ()=>{} !!! this == classObject , if function(){} this == setTimeout
            console.log ( 'In callFirst' );
            debugger;
            this.on ( 'start callFirst', callback );
        }, 100 );
        this.call_1 ( str );
    }

    call_1 ( d ) {
        setTimeout ( () => {
            console.log ( `In call_1 d:: ${ d }` );
            this.emit ( 'start callFirst', d.toUpperCase () );
        }, 100 );
    }
}

module.exports = ClassCallers;