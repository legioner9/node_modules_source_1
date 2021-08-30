const DebLogToFile = { deb: false, log: false, logFs: false };
DebLogToFile.help = `const DebLogToFile = { deb: false, log: false, logFs:false }`;

DebLogToFile.call = () => console.log ( DebLogToFile );

module.exports = DebLogToFile;
