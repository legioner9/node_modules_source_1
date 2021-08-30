'use strict';

class ClassCallers extends ( require ( 'events' ).EventEmitter ) {
    constructor () {
        super ();
    }

    callFirst ( str, callback ) {

        setTimeout ( () => { // ()=>{} !!! this == classObject , if function(){} this == setTimeout
            console.log ( 'In callFirst' );
            this.on ( 'start callFirst', callback );
            this.call_1 ( str );
        }, 100 );

    }

    call_1 ( data ) {

        setTimeout ( () => {
            this.on ( 'start callSecond', ( d ) => {
                console.log ( `In call_1 d:: ${ d }` );
                this.emit ( 'start callFirst', d.toUpperCase () );
            } );
            this.call_2 ( data );
        }, 100 );

    }

    call_2 ( data_ ) {

        setTimeout ( () => {
            console.log ( `In call_2 d:: ${ data_ }` );
            this.emit ( 'start callSecond', data_.toLowerCase () );
        }, 100 );
    }
}

module.exports = ClassCallers;