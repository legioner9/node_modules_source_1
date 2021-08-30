const fs = require ( 'fs' );
const my_path = require ( 'path' );

const obj_exports = {};
const arr_path = fs.readdirSync ( __dirname );
arr_path.forEach ( item => {
    if ( item !== 'index.js' && item !== 'Box' ) {
        obj_exports[item] = ( require ( my_path.join ( __dirname, item, 'index.js' ) ) );
    }
} );

obj_exports.help = `HELP module.filename : ${module.filename}`;
obj_exports.call = () => console.log ( obj_exports );

module.exports = obj_exports;