const L_log_deb = ( dev, ...args ) => {
    if ( dev.debLog ) {
        console.log ( ...args );
        debugger;
    }
};
L_log_deb.help = `ModuleFunc = () => {}`;

L_log_deb.call = () => console.log ( L_log_deb );

module.exports = L_log_deb;
