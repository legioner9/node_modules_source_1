# readable.pipe ( writable );

readable.on ( 'data', ( chunk ) => {
    writable.write ( chunk );
} );

readable.on ( 'end', () => {
    writable.end ();
} );