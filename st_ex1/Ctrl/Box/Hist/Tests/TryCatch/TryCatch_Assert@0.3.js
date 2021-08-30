// const Ex = require ( 'st_ex1' );
// const Ex = require ( '../NPM_/st_ex1' );
const tryCatch = require ( '../../../../../SetTry/TryCatch/index@0.3' );
const assert = require ( 'assert' );
const my_path = require ( 'path' );

// debugger;
// Ex.call ();
// Ex.SetTry.TryCatch.help;
// const tryCatch = Ex.SetTry.TryCatch;
console.log ( tryCatch.help );

tryCatch ( assert.strictEqual ) ( '#to_consJson', null, 3, 5 );

tryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5 );
tryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5, '::your message::' );

tryCatch ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );
tryCatch ( assert.strictEqual ) ( 'test_log_mes.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 , '::your message::');

const ret_ass = tryCatch ( assert.strictEqual ) ( '#to_ret', null, 3, 5 );

debugger;