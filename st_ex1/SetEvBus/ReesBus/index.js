const ReesBus = function  () {
    const evB = process.evBus;

    const InBus = {};
    for ( const key in evB ) {
        InBus[key] = evB[key]._events;
    }
    const BusMod = [];
    for ( const key in evB ) {
        BusMod.push ( key );
    }

    const EvNames = [];
    for ( const key in evB ) {
        const eke = evB[key]._events;
        const arr_e = [];
        for ( const jey in eke ) {
            arr_e.push ( jey );
        }
        EvNames.push ( arr_e );
    }
    return { BusMod, EvNames, InBus };
}

ReesBus.help = `ModuleFunc = () => {}`;

ReesBus.call = () => console.log ( ReesBus );

module.exports = ReesBus;