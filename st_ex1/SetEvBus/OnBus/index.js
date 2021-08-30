const OnBus = function ( codeBus, d ) {

    const Ini = require ( 'st_ini' );
    const rb = Ini.reesBus ();

    try {
        if ( !( codeBus instanceof Array ) && ( codeBus.length !== 2 ) ) throw Error ( `OnBuss args is not Array(2) :: ${ codeBus }` );
        if ( ( typeof codeBus[0] !== 'number' ) && ( typeof codeBus[1] !== 'number' ) ) new Error ( `${ codeBus[0] } or ${ codeBus[1] } is not number` );
        const mod = codeBus[0];
        const nomEv = codeBus[1];

        if ( !( rb.BusMod[mod] ) ) throw Error ( `Mod arg ${ mod } not valid` );
        if ( !( process.evBus[rb.BusMod[mod]] ) ) throw Error ( `First arg ${ codeBus[0] } not valid` );
        if ( !( rb.EvNames[mod][nomEv] ) ) throw Error ( `Second arg ${ codeBus[1] } not valid` );

        const a = process.evBus[rb.BusMod[mod]];
        const b = rb.EvNames[mod][nomEv];

        a.emit ( b, d );
    }
    catch (e) {
        console.log ('OnBuss',{e});
    }
};
OnBus.help = `ModuleFunc = () => {}`;

OnBus.call = () => console.log ( OnBus );

module.exports = OnBus;