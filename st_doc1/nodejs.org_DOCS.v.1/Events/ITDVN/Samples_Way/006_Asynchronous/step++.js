const emt = new ( require ( 'events' ) ).EventEmitter;

function su ( num ) {
    console.log ( { num } );
}

let n = 0;
emt.on ( 'event', () => su ( n++ ) );
emt.on ( 'event', () => {
    setTimeout ( () => su ( n++ ), 1000 );
} );
emt.on ( 'event', () => {
    setTimeout ( () => su ( n++ ), 100 );
} );
emt.emit ( 'event' ); // 0 1 2