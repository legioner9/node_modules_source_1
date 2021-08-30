const _require = require ( 'st_require' )._require;
const Arht = _require ( 'st_arht' );

const atOut_1 = Arht.SetArchetype.FunctionARHT.AtOut_1;
const atOut_2 = Arht.SetArchetype.FunctionARHT.AtOut_2;
const atOut_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
const at_1 = Arht.SetArchetype.FunctionARHT.At_1;

// duplicate atOut_fm as MANE export
const arht = Arht.SetArchetype.FunctionARHT.AtOut_fm;

module.exports = {

    atOut_1,
    atOut_2,
    atOut_fm,
    arht,
    at_1,
};
