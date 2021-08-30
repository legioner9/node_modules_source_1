'use strict';

const { EventEmitter } = require ( 'events' );

const emitter = new EventEmitter ();

const listenCity = () => {
    let arr_ini = [];
    return city => {
        arr_ini.push ( city );
        debugger
        emitter.emit ( 'data', arr_ini );
    };
};

emitter.on ( 'new city', listenCity () );

emitter.on ( 'data', array => {
    debugger
    console.log ( array );
} );

emitter.emit ( 'new city', 'Delhi' );
emitter.emit ( 'new city', 'Berlin' );
emitter.emit ( 'new city', 'Tokyo' );
