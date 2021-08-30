const emt = new ( require ( 'events' ) ).EventEmitter;

emt.on ( 'functionExpress', function () {
    debugger; //this = emt
    console.log ( this );
} );

emt.on ( 'arrowFunction', () => {
    debugger;
    console.log ( this ); // this = exports = {x:10}
} );
const z = 33;
exports.x = 10;
emt.emit ( 'functionExpress' );
emt.emit ( 'arrowFunction' );