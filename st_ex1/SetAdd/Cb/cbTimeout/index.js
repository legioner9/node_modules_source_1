const cbTimeout = (interval, fn) => setTimeout(fn, interval);
cbTimeout.help = `ModuleFunc = () => {}`;

cbTimeout.call = () => console.log ( cbTimeout );
module.exports = cbTimeout;