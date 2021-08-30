const L_deb = ( dev ) => {
    if ( dev.deb ) debugger;
};
L_deb.help = `ModuleFunc = () => {}`;

L_deb.call = () => console.log ( L_deb );

module.exports = L_deb;
