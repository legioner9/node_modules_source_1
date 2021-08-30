const {_require} = require('st_require');
const arht = _require('_aop').archetypes.function.arht;
const ini_fs = _require('st_ini_fs_');
// const utest = _require ( '_utest_ini' );
const all = _require('_utest').node.modules_.all;
debugger
// event report out (export from) Func_examp:

// fn.event.once ( '_start', function ( ENV ) {
//     debugger
//     console.log ( 'start function with ENV: ', ENV );
// }, fn );
//
// fn.event.once ( '_innerState', function ( innerState ) {
//     debugger
//     console.log ( 'current innerState is: ', innerState );
// }, fn );

// define report behaviour :

// fn.mode.log = true;
// fn.mode.deb = true;
// fn.mode.debLog = true;
// fn.mode.logFs = true;
// fn.stack = true;
// fn.exit = true

// BOUNDEN CALL define root_path
// arht.module ( fn, module );
all.module = module;

const isDirectory_u = require('../../../../../_node/_fs/isDirectory/Test/u_test');
const isFile_u = require('../../../../../_node/_fs/isFile/Test/u_test');
const mkdirSync_u = require('../../../../../_node/_fs/mkdirSync/Test/u_test');
const readdirSync_u = require('../../../../../_node/_fs/readdirSync/Test/u_test');
const readFileSync_u = require('../../../../../_node/_fs/readFileSync/Test/u_test');
const stats_u = require('../../../../../_node/_fs/stats/Test/u_test');
const writeFileSync_u = require('../../../../../_node/_fs/writeFileSync/Test/u_test');
const rmdirSync_u = require('../../../../../_node/_fs/rmdirSync/Test/u_test');
const appendFileSync_u = require('../../../../../_node/_fs/appendFileSync/Test/u_test');

const object_result_u = {
  isDirectory_u,
  isFile_u,
  mkdirSync_u,
  readdirSync_u,
  readFileSync_u,
  stats_u,
  writeFileSync_u,
  rmdirSync_u,
  appendFileSync_u,
};

const isDirectory_s = require('../../../../../_node/_fs/isDirectory/Test/s_test');
const isFile_s = require('../../../../../_node/_fs/isFile/Test/s_test');

const object_result_s = {
  isDirectory_s,
  isFile_s,
}

debugger
all(object_result_u, object_result_s);

// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// fn.event.emit ( 'ev_to_func', 'mes ev_to_func' );
// fn.event.emit ( 'ev_ce_to_func', 'mes ev_ce_to_func' );

