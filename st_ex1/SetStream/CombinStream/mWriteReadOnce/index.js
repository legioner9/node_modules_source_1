

const mWriteReadOnce = function ( ) {
    const Ex = require ( 'st_ex1' );
    const wOnce = Ex.SetStream.StreamAllOn.WriteAllOnce;
    const rOnce = Ex.SetStream.StreamAllOn.ReadAllOnce;

    return { wOnce, rOnce };
};

mWriteReadOnce.help = `mWriteReadOnce()
return { wOnce, rOnce }`;

mWriteReadOnce.call = () => console.log ( mWriteReadOnce );

module.exports = mWriteReadOnce;
