const fs = require ( 'fs' );
const my_path = require ( 'path' );
const { Readable, Writable, Transform, pipeline } = require ( 'stream' );

function LogTo ( obj_init, file_name = 'SuLog.txt', dir_name = 'SuLog' ) {

    switch (file_name) {
        case '#to_consJson':
            s_log_to_cons_Json ( obj_init );
            break;

        case '#to_consMes':
            s_log_to_cons_Mes ( obj_init );
            break;

        case '#to_ret':
            return s_log_to_ret_1 ( obj_init );
        // break;

        default:
            let stack = '';
            if ( obj_init.stack ) stack = obj_init.stack;
            const str_3 = `${ JSON.stringify ( obj_init ) }
            ${ stack }
 
            ${ new Date () }`;
            fs.mkdir ( my_path.join ( dir_name ), { recursive: true }, ( err ) => {
                if ( err ) throw err;
                s_log_to_file ( str_3, my_path.join ( dir_name, file_name ) );
            } );
            break;
    }
}

LogTo.help = `'#to_ret': TryCatch ( assert.strictEqual ) ( '#to_ret', null, 3, 5 );
'#to_consMes': TryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5 );
'#to_consJson': TryCatch ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );
'any': TryCatch ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );`;

LogTo.call = () => console.log ( LogTo );

function s_log_to_file ( str, path ) {

    const rstr = new Readable ();
    rstr.push ( str );
    rstr.push ( null );
    // inStream.pipe ( process.stdout );
    const write_fs = fs.createWriteStream ( path, 'utf-8' );
    write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
    pipeline (
        rstr,
        process.stdout,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
    pipeline (
        rstr,
        write_fs,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
}

function s_log_to_cons_Json ( obj ) {

    const str = `${ JSON.stringify ( obj ) }`;
    console.log ( str );

}

function s_log_to_cons_Mes ( obj ) {

    if ( obj.code ) {
        debugger;
        let mes = ( obj.message.split ( ':' )[1] ).trim ();
        if ( !mes ) mes = obj.message;
        const str = `${ obj.code } : ${ mes }`;
        console.log ( str );
    }
    else console.log ( 'Not error:', obj );

}

function s_log_to_ret_1 ( obj ) {

    return obj;

}

module.exports = LogTo;
