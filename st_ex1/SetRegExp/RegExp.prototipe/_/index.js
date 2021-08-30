const ModuleFunc = (x , opt = false) => {
    if ( opt === true ) debugger;
};
ModuleFunc.help = `ModuleFunc = () => {}`;

ModuleFunc.call = () => console.log ( ModuleFunc );

// module.exports = ModuleFunc;