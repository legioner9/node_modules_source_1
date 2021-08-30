const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );
debugger
const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, logFs: false, stack: false};

const Func_examp = () => {
    arht_fm.at ( Func_examp );
    console.log ( 'Run Func_examp------------' );
};

arht_fm.prop ( Func_examp );
arht_fm.out ( Func_examp );

debugger;
arht_fm.before()
Func_examp ();
