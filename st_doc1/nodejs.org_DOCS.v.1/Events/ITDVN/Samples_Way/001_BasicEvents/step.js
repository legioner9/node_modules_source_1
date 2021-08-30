const emitter = new ( require ( 'events' ).EventEmitter ) ();
debugger;
emitter.on ( 'create_dir', ( ...args ) => {
    console.log ( 'Dir is create!!!', ...args );
} );

emitter.emit ( 'create_dir', 4, 'r', { f: 'f' } );