const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
const l_fsLogErr = require ( 'st_ini_deep1' ).l_fsLogErr;
// const DebLogToFile = { deb: false, log: false, logFs: false };

const dev = { deb: true, log: true, logFs: true };

// l_fsLog ( dev, 'fewq32421\n' , __dirname,[ 'fsLog_1', 'log_1.md']);
// l_fsLog ( dev, `array [${[4,'gb']}] \n` , __dirname,[ 'fsLog_2', 'log_2.md']);

l_fsLogErr ( true, 'first\n',__dirname );
l_fsLogErr ( true, 'second\n',__dirname );

debugger;
