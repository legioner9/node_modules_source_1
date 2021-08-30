'use strict';

const fs = require ( 'fs' );

class ClassReadFile extends ( require ( 'events' ).EventEmitter ) {
    constructor () {
        super ();
    }

    readDataFromFile ( path, callback ) {

        this.file = path;
        if ( typeof callback == 'function' ) {
            this.on ( 'readData', callback );
            debugger;
        }
        this._read ();
    }

    _read () {
        debugger;
        console.log ( 'Loading...' );
        fs.readFile ( this.file, 'utf-8', ( e, d ) => {
            if ( e ) throw e;
            this.emit ( 'readData', d );// данные считанные из файла
        } );

        console.log ( 'Data was read.' );

    }
}

module.exports = ClassReadFile;