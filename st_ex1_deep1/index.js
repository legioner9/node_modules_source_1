const fs = require ( 'fs' );
const my_path = require ( 'path' );

const obj_exports = {};
const arr_path = fs.readdirSync ( __dirname );
arr_path.forEach ( item => {
    if ( item !== 'index.js' && item !== 'Box' && item !== 'Ctrl' && item !== 'README.md' && item !== 'package.json' ) {

        obj_exports[item] = ( require ( my_path.join ( __dirname, item, 'index.js' ) ) );
    }
} );
obj_exports.help = `HELP module.filename : ${module.filename}`;
obj_exports.call = () => console.log ( obj_exports );
module.exports = obj_exports;

// const my_path = require ( 'path' );
// // const ServCacheModulesOfMethods = require ( './Ingx/ServCacheModulesOfMethods/I_getCache_startServ.js' );
// const {
//     ServCacheModulesOfMethods,
// } = require ( my_path.join ( __dirname, 'Ingx', 'ServCacheModulesOfMethods' ) );
// const {
//     Su_log_to_file,
//     SuTry,
// } = require ( my_path.join ( __dirname, 'Ingx', 'Loggers' ) );
// const {
//     SuServer,
//     SuHandServ,
// } = require ( my_path.join ( __dirname, 'Ingx', 'Servers' ) );
//
// module.exports = {
//     SuServer,
//     SuHandServ,
//     ServCacheModulesOfMethods,
//     Su_log_to_file,
//     SuTry,
// };
