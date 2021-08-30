const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );

const func_v_1_test_1 = require ( '../index' );
debugger

// set behavior ModuleFunc in runtime
func_v_1_test_1.mode = { deb: false, log: false, logFs: true, stack: false };
func_v_1_test_1.module = module;
func_v_1_test_1.preset = {};
// subscription to reports on ModuleFunc
func_v_1_test_1.event.on ( 'start ModuleFunc', d => console.log(d) );
func_v_1_test_1.event.on ( 'point_1 ModuleFunc', d => console.log(d) );
func_v_1_test_1.event.on ( 'end ModuleFunc', d => console.log(d) );

// func_v_1_test_1 InitState reports
// func_v_1_test_1.event.emit ('init ModuleFunc', d = [__dirname])

// func_v_1_test_1 Case_1 reports NB! only after first
func_v_1_test_1.event.emit ('init case_1', 'first') // not Run
func_v_1_test_1 ();
func_v_1_test_1.event.emit ('init case_1', 'second')
func_v_1_test_1 ();
debugger;
