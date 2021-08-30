const EE = require ( 'events' ).EventEmitter;
const my_path = require ( 'path' );
const fs = require ( 'fs' );
const elog_1 = new EE ();

const obj_res = {};

elog_1.on ( 'toConsole', d => console.log ( { d } ) );
elog_1.on ( 'logToFile+', d => {

    if ( ( d.length !== 3 ) && !( d instanceof Array ) ) throw new TypeError ( 'logToFile IS NOT Array(3)' );
    const [ dir, file, data ] = d;

    let dataIn = data;
    const key = [ dir, file ].join ( ' , ' );
    if ( data instanceof Object ) dataIn = JSON.stringify ( data );
    if ( !obj_res[key] ) obj_res[key] = dataIn ;
    else obj_res[key] = obj_res[key] + '\n' + dataIn ;

} );

elog_1.on ( 'logToFile=', d => {

    if ( ( d.length !== 2 ) && !( d instanceof Array ) ) throw new TypeError ( 'logToFile IS NOT Array(2)' );
    const [ dir, file ] = d;

    const key = d.join ( ' , ' );
    let data = obj_res[key];
    console.log ( { data } );
    const wfs = fs.createWriteStream ( my_path.join ( dir, 'Core', 'Logs', file ) );
    wfs.write ( data );

} );

elog_1.on ( 'errToFile', d => {
    if ( ( d.length !== 3 ) && !( d instanceof Array ) ) throw new TypeError ( 'logToFile IS NOT Array(3)' );
    const [ dir, file, data ] = d;

    const wfs = fs.createWriteStream ( my_path.join ( dir, 'Core', 'Logs', 'Error', file ) );
    let dataIn = data;
    if ( data instanceof Object ) dataIn = JSON.stringify ( data );
    wfs.write ( dataIn );

} );
elog_1.help = `'toConsole' : d => console.log ( { d } ) `;

elog_1.call = () => console.log ( ModuleFunc );

module.exports = elog_1;