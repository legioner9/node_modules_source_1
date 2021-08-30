const emt = new ( require ( 'events' ) ).EventEmitter;
debugger;

emt.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
emt.on ( 'even', () => console.log ( '\'Evev\' emitting' ) );

emt.emit ( 'error', new Error ( 'Warning !' ) );