const AddEvBus = function (file_path) {

        const EV = require ( 'events' ).EventEmitter;
        const Ini = require ( 'st_ini' );

        const str_res = Ini.pathToName ( file_path );
        process.evBus[str_res] = new EV;

};
AddEvBus.help = `ModuleFunc = () => {}`;

AddEvBus.call = () => console.log ( AddEvBus );

module.exports = AddEvBus;