

const mWriteReadStream = function ( optWrite = [], optRead = [] ) {
    const STR = require ( 'stream' );
    const Ex = require ( 'st_ex1' );
    const Wropt = Ex.SetStream_.StreamOptions.ClassWriteOptions;
    const wropt = new Wropt ( ...optWrite );
    const waon = Ex.SetStream_.StreamAllOn.WriteAllOn;
    console.log ( waon.help );

    const Rropt = Ex.SetStream_.StreamOptions.ClassReadOptions;
    const rropt = new Rropt ( ...optRead );
    const raon = Ex.SetStream.StreamAllOn.ReadAllOn;
    console.log ( raon.help );

    const wr = new STR.Writable ( wropt );
    waon ( wr );
    const rr = new STR.Readable ( rropt );
    raon ( rr );
    return { wr, rr };
};

mWriteReadStream.help = `mWriteReadStream = function ( optWrite = [], optRead = [] )
return { wr, rr }`;

mWriteReadStream.call = () => console.log ( mWriteReadStream );

module.exports = mWriteReadStream;
