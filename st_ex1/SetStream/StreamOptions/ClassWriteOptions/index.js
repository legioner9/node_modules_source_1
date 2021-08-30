const writeDef = function ( chunk, encoding, callback ) {
    console.log ( 'WC write', { chunk, encoding } );
    callback ();
};

const writevDef = function ( chunks, callback ) {
    console.log ( 'WC writev', { chunks } );
    callback ();
};

const destroyDef = function ( error, callback ) {
    console.log ( 'WC destroy', { error } );
    callback ();
};
const finalDef = function ( callback ) {
    console.log ( 'WC final' );
    callback ();
};

class ClassWriteOptions {
    constructor ( ...args
                  // 1 highWaterMark = 16384,
                  // 2 decodeStrings = true,
                  // 3 defaultEncoding = 'utf8',
                  // 4 objectMode = false,
                  // 5 emitClose = true,
                  // 6 write = writeDef,
                  // 7 writev = writevDef,
                  // 8 destroy = destroyDef,
                  // 9 final = finalDef,
                  // 10 autoDestroy = false,
    ) {
        const arr_args = Array ( 10 );
        for ( let i = 0 ; i < 9 ; i++ ) {
            for ( const item of args ) {
                if ( item[0] === i ) arr_args[i] = item[1];
            }
        }
        this.highWaterMark = arr_args[0] || 16384;
        this.decodeStrings = arr_args[1] || true;
        this.defaultEncoding = arr_args[2] || 'utf8';
        this.objectMode = arr_args[3] || false;
        this.emitClose = arr_args[4] || true;
        this.write = arr_args[5] || writeDef;
        this.writev = arr_args[6] || writevDef;
        this.destroy = arr_args[7] || destroyDef;
        this.final = arr_args[8] || finalDef;
        this.autoDestroy = arr_args[9] || false;

        const arr_res = Array ( 10 );

        arr_res[0] = 'highWaterMark : ' + this.highWaterMark;
        arr_res[1] = 'decodeStrings : ' + this.decodeStrings;
        arr_res[2] = 'defaultEncoding : ' + this.defaultEncoding;
        arr_res[3] = 'objectMode : ' + this.objectMode;
        arr_res[4] = 'emitClose : ' + this.emitClose;
        arr_res[5] = 'write.name : ' + this.write.name;
        arr_res[6] = 'writev.name : ' + this.writev.name;
        arr_res[7] = 'destroy.name : ' + this.destroy.name;
        arr_res[8] = 'final.name : ' + this.final.name;
        arr_res[9] = 'autoDestroy : ' + this.autoDestroy;

        console.log ( 'CWOpt : ' , arr_res );
    }
}

ClassWriteOptions.help = `// 1 highWaterMark = 16384,
// 2 decodeStrings = true,
// 3 defaultEncoding = 'utf8',
// 4 objectMode = false,
// 5 emitClose = true,
// 6 write = writeDef,
// 7 writev = writevDef,
// 8 destroy = destroyDef,
// 9 final = finalDef,
// 10 autoDestroy = false,`;

ClassWriteOptions.call = () => console.log ( ClassWriteOptions );

module.exports = ClassWriteOptions;