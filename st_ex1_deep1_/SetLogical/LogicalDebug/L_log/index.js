const L_log = (dev, ... args) => {
    if ( dev.log ) console.log(... args);
};
L_log.help = `ModuleFunc = () => {}`;

L_log.call = () => console.log ( L_log );

module.exports = L_log;
