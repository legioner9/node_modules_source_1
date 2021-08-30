const emt = new ( require ( 'events' ) ).EventEmitter;

emt.on ( 'even', () => console.log ( 'A' ) );
emt.prependListener ( 'even', () => console.log ( 'B' ) );
emt.prependOnceListener ( 'even', () => console.log ( 'C' ) );

// even: Array(3)
// 0: ƒ ()
//        listener: () => console.log ( 'C' )
// 1: () => console.log ( 'B' )
// 2: () => console.log ( 'A' )
debugger;
emt.emit ( 'even' );
emt.emit ( 'even' );