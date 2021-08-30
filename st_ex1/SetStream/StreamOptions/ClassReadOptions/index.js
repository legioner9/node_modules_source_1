const readDef = function ( size ) {
    console.log ( 'RC read', { size } );

};

const destroyDef = function ( error, callback ) {
    console.log ( 'RC destroy', { error } );
    callback ();
};

class ClassReadOptions {
    constructor ( ...args
                  // 1 highWaterMark = 16384,
                  // 2 encoding = null,
                  // 3 defaultEncoding = 'utf8',
                  // 4 objectMode = false,
                  // 5 emitClose = true,
                  // 6 read = readDef,
                  // 7 destroy = destroyDef,
                  // 8 autoDestroy = false,
    ) {
        const arr_args = Array ( 8 );
        for ( let i = 0 ; i < 7 ; i++ ) {
            for ( const item of args ) {
                if ( item[0] === i ) arr_args[i] = item[1];
            }
        }
        this.highWaterMark = arr_args[0] || 16384;
        // 2 encoding = null,
        this.encoding = arr_args[1] || null;
        this.defaultEncoding = arr_args[2] || 'utf8';
        this.objectMode = arr_args[3] || false;
        this.emitClose = arr_args[4] || true;
        // 6 read = readDef,
        this.read = arr_args[5] || readDef;
        this.destroy = arr_args[6] || destroyDef;
        this.autoDestroy = arr_args[7] || false;

        const arr_res = Array ( 8 );

        arr_res[0] = 'highWaterMark : ' + this.highWaterMark;
        arr_res[1] = 'encoding : ' + this.encoding;
        arr_res[2] = 'defaultEncoding : ' + this.defaultEncoding;
        arr_res[3] = 'objectMode : ' + this.objectMode;
        arr_res[4] = 'emitClose : ' + this.emitClose;
        arr_res[5] = 'read.name : ' + this.read.name;
        arr_res[6] = 'destroy.name : ' + this.destroy.name;
        arr_res[7] = 'autoDestroy : ' + this.autoDestroy;

        console.log ( 'CROpt : ', arr_res );
    }
}

ClassReadOptions.help = `                  // 1 highWaterMark = 16384,
                  // 2 encoding = null,
                  // 3 defaultEncoding = 'utf8',
                  // 4 objectMode = false,
                  // 5 emitClose = true,
                  // 6 read = readDef,
                  // 7 destroy = destroyDef,
                  // 8 autoDestroy = false,`;

ClassReadOptions.call = () => console.log ( ClassReadOptions );

module.exports = ClassReadOptions;