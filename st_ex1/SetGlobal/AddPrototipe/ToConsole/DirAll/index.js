let p = {
    writable: true,
};
Object.defineProperties ( console,
                          {
                              'DirAll': p,
                          } );

console.DirAll = function ( obj ) {
    console.dir ( { obj }, {
                             showHidden: true,
                             depth: 20,
                             colors: true
                         }
    );
};
module.exports = {};