const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );

const func_v_1_test_1 = require ( '../index' );
debugger

// set behavior ModuleFunc in runtime
func_v_1_test_1.mode = { deb: false, log: false, logFs: true, stack: false };
func_v_1_test_1.module = module;
func_v_1_test_1.preset = {};
// subscription to reports on ModuleFunc
// func_v_1_test_1.event.on ( 'start ModuleFunc', d => {} );
// func_v_1_test_1.event.on ( 'point ModuleFunc', d => {} );
// func_v_1_test_1.event.on ( 'end ModuleFunc', d => {} );

// func_v_1_test_1 InitState reports
// func_v_1_test_1.event.emit ('init ModuleFunc', d = [__dirname])

// func_v_1_test_1 Case_1 reports
// func_v_1_test_1.event.emit ('init case_1', true)
func_v_1_test_1 ();
debugger;
