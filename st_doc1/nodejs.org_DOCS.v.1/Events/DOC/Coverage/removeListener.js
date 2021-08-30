const MyEmitter = require ( 'events' ).EventEmitter;

const myEmitter = new MyEmitter ();

const A = () => {
    console.log ( 'A' );
};
const B = () => {
    console.log ( 'B' );
};

// Only do this once so we don't loop forever

myEmitter.on ( 'removeListener', ( event, callback ) => {
    console.log ( { event, callback } );
} );

myEmitter.on ( 'event', A );
myEmitter.on ( 'event', B );
debugger;
myEmitter.removeListener ( 'event', A );
//callback: () => {
//  console.log ( 'A' );
//  }
// event: "event"

myEmitter.removeListener ( 'event', B );
//callback: () => {
//  console.log ( 'B' );
//  }
// event: "event"

myEmitter.emit ( 'event' );
// Prints: nothing

