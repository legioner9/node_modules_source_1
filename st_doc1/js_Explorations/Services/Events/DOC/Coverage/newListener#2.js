const MyEmitter = require ( 'events' ).EventEmitter;

const myEmitter = new MyEmitter ();
// Only do this once so we don't loop forever
myEmitter.once ( 'newListener', ( event, listener ) => {
    const arg = { event, listener };
    //arg:
    // event: "event"
    // listener: () => {
    //  console.log ( 'A' );
    //  }

} );
debugger;
myEmitter.on ( 'event', () => {
    console.log ( 'A' );
} );

myEmitter.once ( 'newListener', ( event, listener ) => {
    const arg = { event, listener };
    //arg:
    // event: "event_"
    // listener: () => {
    //  console.log ( 'B' );
    //  }
    debugger;
} );
myEmitter.on ( 'event_', () => {
    console.log ( 'B' );
} );

myEmitter.removeListener ( 'event', () => {
    console.log ( 'B' );
} );
myEmitter.emit ( 'event' );

myEmitter.emit ( 'event_' );

// Prints:
//   B
//   A