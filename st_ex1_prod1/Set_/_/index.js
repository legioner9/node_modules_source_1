const Ini_deep = require ( 'st_ini_deep1' );

const { l_log, l_deb, l_log_deb, l_fsLog } = Ini_deep;

// l_fsLog ( dev, 'String\n' , __dirname,[ 'fsLog_1', 'log_1.md']);

const ModuleFunc = ( x, opt = false ) => {
    if ( ModuleFunc.deb ) debugger;
    if ( ModuleFunc.stack ) console.log ( `ModuleFunc is RUN` );
    l_fsLog ( ModuleFunc.logFs, 'Info for log file\n', __dirname, [ 'fsLog_1', 'log_1.md' ] );

};
ModuleFunc.help = `ModuleFunc = () => {}`;

ModuleFunc.call = () => console.log ( ModuleFunc );

// createTechDir_4.mode = { deb: false, log: true, logFs: false , stack: false};

// module.exports = ModuleFunc;
