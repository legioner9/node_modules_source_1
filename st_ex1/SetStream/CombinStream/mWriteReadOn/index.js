

const mWriteReadOn = function ( ) {
    const Ex = require ( 'st_ex1' );
    const wOn = Ex.SetStream.StreamAllOn.WriteAllOn;
    const rOn = Ex.SetStream.StreamAllOn.ReadAllOn;

    return { wOn, rOn };
};

mWriteReadOn.help = `mWriteReadOn()
return { wOn, rOn }`;

mWriteReadOn.call = () => console.log ( mWriteReadOn );

module.exports = mWriteReadOn;
