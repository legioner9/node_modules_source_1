const mStreams = function ( optWrite = [], optRead = [] ) {
    const STR = require ( 'stream' );
    const Ex = require ( 'st_ex1' );

    const Wropt = Ex.SetStream.StreamOptions.ClassWriteOptions;
    const wropt = new Wropt ( ...optWrite );
    const waon = Ex.SetStream.StreamAllOn.WriteAllOn;
    console.log ( waon.help );

    const Rropt = Ex.SetStream.StreamOptions.ClassReadOptions;
    const rropt = new Rropt ( ...optRead );
    const raon = Ex.SetStream.StreamAllOn.ReadAllOn;
    console.log ( raon.help );

    const wr = new STR.Writable ( wropt );
    waon ( wr );
    const rr = new STR.Readable ( rropt );
    raon ( rr );
    return { wr, rr };
};

const Streams = mStreams ( [ [ 1, '1111' ], [ 2, '0000' ] ], [ [ 3, function RRR () {} ], [ 6, 999 ] ] );
const rS = Streams.rr;
const wS = Streams.wr;
debugger;