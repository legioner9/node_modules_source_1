const emt = new ( require ( 'events' ) ).EventEmitter;

function su ( num ) {
    console.log ( { num } );
}

const callbackA = () => {
    console.log ( 'A' );
    emt.removeListener ( 'even', callbackB );
};
const callbackB = () => console.log ( 'B' );
const callbackC = () => console.log ( 'C' );

emt.on ( 'even', () => su ( 1 ) );
emt.on ( 'even', callbackA );
emt.on ( 'even', callbackB );
emt.once ( 'even', callbackC );

emt.on ( 'even', () => {
    setTimeout ( () => su ( 2 ), 1000 );
} );

const emt_events = emt._events.even[0];
emt.removeListener ( 'even', emt._events.even[0] );//index queue callback is 0 therefore  remove  on.( 'even', () => su ( 1 ) )

emt.on ( 'even', () => {
    setTimeout ( () => su ( 3 ), 100 );
} );

// 0: () => {…}
//        [[FunctionLocation]]: step.js:7
// 1: () => console.log ( 'B' )
// 2: ƒ ()
//        listener: () => console.log ( 'C' );
// 3: () => {
//     setTimeout ( () => su ( 2 ), 1000 );
// }
// 4: () => {
//     setTimeout ( () => su ( 3 ), 100 );
// }
debugger;
emt.emit ( 'even' ); // A B C 3 2 because in time run A queue is fixed in run , but remove beyond to next run
emt.emit ( 'even' ); // A C 3 2