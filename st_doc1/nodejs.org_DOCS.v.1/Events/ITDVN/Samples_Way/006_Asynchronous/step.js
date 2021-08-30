const emt = new ( require ( 'events' ) ).EventEmitter;

function su ( num ) {
    console.log ( { num } );
}

let n = 0;
emt.on ( 'event', () => su ( 1 ) );
emt.on ( 'event', () => {
    setTimeout ( () => su ( 2 ), 1000 );
} );
emt.on ( 'event', () => {
    setTimeout ( () => su ( 3 ), 100 );
} );
emt.emit ( 'event' ); // 1 3 2