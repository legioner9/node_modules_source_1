const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

pipeLine = ( src, dist, opt = false ) => {
    return pipeline (
        src,
        dist,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                if ( opt ) console.log ( 'Pipeline succeeded.' );
            }
        }
    );
};

pipeLine.help = `ModuleFunc = () => {}`;

pipeLine.call = () => console.log ( ModuleFunc );

module.exports = pipeLine;