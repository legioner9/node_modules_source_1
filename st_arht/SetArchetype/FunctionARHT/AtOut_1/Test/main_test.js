const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );

const arht_1 = Arht.SetArchetype.FunctionARHT.AtOut_1;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, logFs: false, stack: false};

const Func_examp = () => {
    arht_1 ( Func_examp );
    console.log ( 'Run Func_examp------------' );
};

arht_1.out ( Func_examp );

debugger;
